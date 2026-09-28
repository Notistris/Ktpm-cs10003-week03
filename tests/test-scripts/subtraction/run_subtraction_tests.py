"""Run the Basic Calculator subtraction test suite with Selenium."""

from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

from selenium import webdriver
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait


DEFAULT_URL = "https://testsheepnz.github.io/BasicCalculator.html"
VALID_BUILDS = {"Prototype", *(str(number) for number in range(1, 10))}


@dataclass(frozen=True)
class TestCase:
    test_id: str
    title: str
    first_number: str
    second_number: str
    integers_only: bool = False
    expected_answer: str | None = None
    expected_error: str | None = None


@dataclass(frozen=True)
class TestResult:
    test_id: str
    build: str
    status: str
    expected: str
    actual: str
    note: str = ""
    evidence: str = ""


TEST_CASES = (
    TestCase("TC-SUB-001", "Subtract two positive integers successfully", "25", "10", expected_answer="15"),
    TestCase("TC-SUB-002", "Subtraction produces a negative result", "3", "8", expected_answer="-5"),
    TestCase("TC-SUB-003", "Subtract two equal numbers", "42", "42", expected_answer="0"),
    TestCase("TC-SUB-004", "Subtract a positive number from zero", "0", "7", expected_answer="-7"),
    TestCase("TC-SUB-005", "Subtract a positive number from a negative number", "-10", "5", expected_answer="-15"),
    TestCase("TC-SUB-006", "Subtract a negative number from a positive number", "10", "-5", expected_answer="15"),
    TestCase("TC-SUB-007", "Subtract two decimal numbers", "10.75", "2.25", expected_answer="8.5"),
    TestCase(
        "TC-SUB-008",
        "Display a decimal subtraction result as an integer",
        "10.9",
        "2.1",
        integers_only=True,
        expected_answer="8",
    ),
    TestCase(
        "TC-SUB-009",
        "Reject non-numeric input in the first number",
        "abc",
        "5",
        expected_error="Number 1 is not a number",
    ),
    TestCase(
        "TC-SUB-010",
        "Reject non-numeric input in the second number",
        "5",
        "xyz",
        expected_error="Number 2 is not a number",
    ),
)

# Local defect IDs used until the corresponding GitHub issues are created.
RELATED_BUGS = {
    **{
        ("1", test_id): "[#2](https://github.com/Notistris/Ktpm-cs10003-week03/issues/2)"
        for test_id in ("TC-SUB-009", "TC-SUB-010")
    },
    ("4", "TC-SUB-007"): "[#3](https://github.com/Notistris/Ktpm-cs10003-week03/issues/3)",
    **{
        ("7", test_id): "[#4](https://github.com/Notistris/Ktpm-cs10003-week03/issues/4)"
        for test_id in (
            "TC-SUB-001",
            "TC-SUB-002",
            "TC-SUB-003",
            "TC-SUB-005",
            "TC-SUB-006",
            "TC-SUB-007",
            "TC-SUB-008",
            "TC-SUB-009",
        )
    },
    **{
        ("8", test_id): "[#5](https://github.com/Notistris/Ktpm-cs10003-week03/issues/5)"
        for test_id in (
            "TC-SUB-001",
            "TC-SUB-002",
            "TC-SUB-004",
            "TC-SUB-005",
            "TC-SUB-006",
            "TC-SUB-007",
            "TC-SUB-008",
            "TC-SUB-009",
            "TC-SUB-010",
        )
    },
}


def parse_items(values: Iterable[str]) -> list[str]:
    """Allow both space-separated and comma-separated CLI values."""
    return [item.strip() for value in values for item in value.split(",") if item.strip()]


def normalize_test_id(value: str) -> str:
    value = value.upper()
    if value.isdigit():
        return f"TC-SUB-{int(value):03d}"
    if value.startswith("SUB-"):
        value = f"TC-{value}"
    return value


def selected_cases(values: list[str]) -> list[TestCase]:
    requested = parse_items(values)
    if not requested or any(value.lower() == "all" for value in requested):
        return list(TEST_CASES)

    requested_ids = {normalize_test_id(value) for value in requested}
    known_ids = {case.test_id for case in TEST_CASES}
    unknown = sorted(requested_ids - known_ids)
    if unknown:
        raise ValueError(f"Unknown test case(s): {', '.join(unknown)}")
    return [case for case in TEST_CASES if case.test_id in requested_ids]


def selected_builds(values: list[str]) -> list[str]:
    requested = parse_items(values)
    if any(value.lower() == "all" for value in requested):
        return ["Prototype", *(str(number) for number in range(1, 10))]

    normalized = ["Prototype" if value.lower() == "prototype" else value for value in requested]
    unknown = sorted(set(normalized) - VALID_BUILDS)
    if unknown:
        raise ValueError(f"Unknown build(s): {', '.join(unknown)}")
    return list(dict.fromkeys(normalized))


def create_driver(browser: str, headed: bool) -> webdriver.Remote:
    if browser == "chrome":
        options = webdriver.ChromeOptions()
        if not headed:
            options.add_argument("--headless=new")
        options.add_argument("--window-size=1440,1000")
        return webdriver.Chrome(options=options)

    if browser == "edge":
        options = webdriver.EdgeOptions()
        if not headed:
            options.add_argument("--headless=new")
        options.add_argument("--window-size=1440,1000")
        return webdriver.Edge(options=options)

    options = webdriver.FirefoxOptions()
    if not headed:
        options.add_argument("--headless")
    options.add_argument("--width=1440")
    options.add_argument("--height=1000")
    return webdriver.Firefox(options=options)


def expected_text(case: TestCase) -> str:
    if case.expected_error is not None:
        return f"Error: {case.expected_error}"
    return f"Answer: {case.expected_answer}"


def actual_text(answer: str, error: str) -> str:
    parts = []
    if answer:
        parts.append(f"Answer: {answer}")
    if error:
        parts.append(f"Error: {error}")
    return "; ".join(parts) if parts else "No answer or error displayed"


def execute_case(
    driver: webdriver.Remote,
    wait: WebDriverWait,
    base_url: str,
    build: str,
    case: TestCase,
    evidence_dir: Path | None,
) -> TestResult:
    expected = expected_text(case)
    screenshot_path = ""

    try:
        driver.get(base_url)
        wait.until(lambda current: current.find_element(By.ID, "selectBuild"))

        Select(driver.find_element(By.ID, "selectBuild")).select_by_value(
            "0" if build == "Prototype" else build
        )
        first = driver.find_element(By.ID, "number1Field")
        second = driver.find_element(By.ID, "number2Field")
        first.clear()
        first.send_keys(case.first_number)
        second.clear()
        second.send_keys(case.second_number)
        Select(driver.find_element(By.ID, "selectOperationDropdown")).select_by_value("1")

        integer_checkbox = driver.find_element(By.ID, "integerSelect")
        if integer_checkbox.is_selected() != case.integers_only:
            integer_checkbox.click()

        driver.find_element(By.ID, "calculateButton").click()
        wait.until(
            lambda current: current.execute_script(
                "return document.getElementById('calculatingForm').hidden "
                "&& !document.getElementById('calculateButton').disabled;"
            )
        )

        answer = driver.find_element(By.ID, "numberAnswerField").get_attribute("value") or ""
        error = driver.find_element(By.ID, "errorMsgField").text.strip()
        passed = error == case.expected_error if case.expected_error is not None else (
            answer == case.expected_answer and error == ""
        )
        actual = actual_text(answer, error)

        if not passed and evidence_dir is not None:
            evidence_dir.mkdir(parents=True, exist_ok=True)
            screenshot = evidence_dir / f"{case.test_id}-build-{build.lower()}.png"
            driver.save_screenshot(str(screenshot))
            screenshot_path = str(screenshot)

        return TestResult(
            case.test_id,
            build,
            "Pass" if passed else "Fail",
            expected,
            actual,
            evidence=screenshot_path,
        )
    except Exception as error:  # A broken build can hide or disable required controls.
        if evidence_dir is not None:
            evidence_dir.mkdir(parents=True, exist_ok=True)
            screenshot = evidence_dir / f"{case.test_id}-build-{build.lower()}-error.png"
            try:
                driver.save_screenshot(str(screenshot))
                screenshot_path = str(screenshot)
            except WebDriverException:
                screenshot_path = ""
        if build == "9":
            error_message = "Second number and Calculate controls are hidden/disabled in Build 9"
        else:
            detail = str(error).strip().splitlines()[0] if str(error).strip() else "Unknown error"
            error_message = f"{type(error).__name__}: {detail}"
        return TestResult(
            case.test_id,
            build,
            "Blocked",
            expected,
            "Test could not complete",
            note=error_message,
            evidence=screenshot_path,
        )


def markdown_cell(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ")


def write_report(
    path: Path,
    results: list[TestResult],
    browser: str,
    base_url: str,
    tester: str,
) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    builds = ", ".join(dict.fromkeys(result.build for result in results))
    lines = [
        f"# Test Run: Subtraction — Build {builds}",
        "",
        f"- **Executed at:** {datetime.now().astimezone().isoformat(timespec='seconds')}",
        f"- **Tester:** {tester}",
        f"- **Browser:** {browser}",
        f"- **URL:** {base_url}",
        f"- **Build:** {builds}",
        "",
        "| Test Case ID | Module | Tester | Result | Related Bug | Note |",
        "|---|---|---|---|---|---|",
    ]
    for result in results:
        if result.status == "Pass":
            related_bug = "None"
            note = ""
        elif result.status == "Fail":
            related_bug = RELATED_BUGS.get(
                (result.build, result.test_id), "Pending GitHub issue"
            )
            note = f"Expected {result.expected}; actual {result.actual}"
        else:
            related_bug = "Pending GitHub issue"
            note = f"Execution blocked: {result.note or result.actual}"

        lines.append(
            "| "
            + " | ".join(
                markdown_cell(value)
                for value in (
                    result.test_id,
                    "Subtraction",
                    tester,
                    result.status,
                    related_bug,
                    note,
                )
            )
            + " |"
        )
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Run Basic Calculator subtraction test cases.")
    parser.add_argument(
        "--tests",
        nargs="+",
        default=["all"],
        metavar="TEST_ID",
        help="Test IDs or numbers, separated by spaces or commas (default: all).",
    )
    parser.add_argument(
        "--builds",
        nargs="+",
        default=["Prototype"],
        metavar="BUILD",
        help="Prototype, 1-9, or all; separated by spaces or commas (default: Prototype).",
    )
    parser.add_argument("--browser", choices=("chrome", "edge", "firefox"), default="chrome")
    parser.add_argument("--headed", action="store_true", help="Show the browser window.")
    parser.add_argument("--base-url", default=DEFAULT_URL)
    parser.add_argument("--timeout", type=float, default=10.0, help="Wait timeout in seconds.")
    parser.add_argument("--report", type=Path, help="Optional Markdown test-run output path.")
    parser.add_argument(
        "--report-dir",
        type=Path,
        help="Write one Markdown report per build into this directory.",
    )
    parser.add_argument("--tester", default="Automation", help="Tester name used in the report.")
    parser.add_argument("--evidence-dir", type=Path, help="Save screenshots for failed/blocked tests.")
    parser.add_argument("--list", action="store_true", help="List available tests and exit.")
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if args.list:
        for case in TEST_CASES:
            print(f"{case.test_id}: {case.title}")
        return 0

    try:
        cases = selected_cases(args.tests)
        builds = selected_builds(args.builds)
    except ValueError as error:
        parser.error(str(error))

    if args.timeout <= 0:
        parser.error("--timeout must be greater than zero")

    try:
        driver = create_driver(args.browser, args.headed)
    except WebDriverException as error:
        print(f"Unable to start {args.browser}: {error}", file=sys.stderr)
        return 2

    results: list[TestResult] = []
    try:
        wait = WebDriverWait(driver, args.timeout)
        for build in builds:
            for case in cases:
                result = execute_case(
                    driver,
                    wait,
                    args.base_url,
                    build,
                    case,
                    args.evidence_dir,
                )
                results.append(result)
                print(
                    f"[{result.status.upper():7}] {result.test_id} | "
                    f"Build {result.build} | {result.actual}"
                )
    finally:
        driver.quit()

    passed = sum(result.status == "Pass" for result in results)
    failed = sum(result.status == "Fail" for result in results)
    blocked = sum(result.status == "Blocked" for result in results)
    print(f"\nTotal: {len(results)} | Pass: {passed} | Fail: {failed} | Blocked: {blocked}")

    if args.report:
        write_report(args.report, results, args.browser, args.base_url, args.tester)
        print(f"Report: {args.report}")

    if args.report_dir:
        for build in builds:
            build_results = [result for result in results if result.build == build]
            build_label = "prototype" if build == "Prototype" else f"build-{build}"
            report_path = args.report_dir / f"subtraction-{build_label}-test-run.md"
            write_report(report_path, build_results, args.browser, args.base_url, args.tester)
            print(f"Report: {report_path}")

    return 0 if failed == 0 and blocked == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
