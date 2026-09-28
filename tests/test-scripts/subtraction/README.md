# Subtraction Test Script

This Selenium runner automates `TC-SUB-001` through `TC-SUB-010` against the [TestSheepNZ Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).

## Prerequisites

- Python 3.10 or newer
- Google Chrome, Microsoft Edge, or Firefox
- Internet access to the calculator website

Selenium Manager is included with Selenium and normally locates or obtains the required browser driver automatically.

## Setup

Run these commands from the repository root:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r tests\test-scripts\subtraction\requirements.txt
```

## Basic usage

Run all 10 tests against the correct reference build:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py
```

The browser runs headlessly by default. Add `--headed` to watch the execution:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --headed
```

## Select test cases

Run one test using its complete ID or number:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests TC-SUB-003
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests 3
```

Run several tests using spaces or commas:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests TC-SUB-001 TC-SUB-008 TC-SUB-010
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests 1,8,10
```

List the available tests:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --list
```

## Select builds

Run all tests against one intentionally faulty build:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --builds 8
```

Run selected tests against multiple builds:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests 1,2,7 --builds Prototype,7,8
```

Run the suite against Prototype and builds 1–9:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --builds all
```

Each test/build pair is reported separately. Prototype is the default build.

Create one Markdown report per build:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py `
  --builds all `
  --tester "Your Name" `
  --report-dir tests\test-runs
```

## Browser and timing options

Choose another browser or increase the wait timeout:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py --browser edge --timeout 20
python tests\test-scripts\subtraction\run_subtraction_tests.py --browser firefox --headed
```

Supported browsers are `chrome`, `edge`, and `firefox`.

## Save a test-run report and failure evidence

The report path is optional. When supplied, the runner creates a Markdown table compatible with the assignment's test-run format:

```powershell
python tests\test-scripts\subtraction\run_subtraction_tests.py `
  --builds Prototype,7,8 `
  --tester "Your Name" `
  --report tests\test-runs\subtraction-test-run.md `
  --evidence-dir tests\test-runs\evidence\subtraction
```

Screenshots are saved only for `Fail` or `Blocked` results. Review failures manually before creating a GitHub bug, then replace `None` in the report's **Related Bug** column with the GitHub issue number.

## All arguments

```text
--tests TEST_ID [TEST_ID ...]   Test IDs/numbers or all
--builds BUILD [BUILD ...]      Prototype, builds 1-9, or all
--browser BROWSER               chrome, edge, or firefox
--headed                        Display the browser during execution
--base-url URL                  Override the calculator URL
--timeout SECONDS               Selenium wait timeout (default: 10)
--report PATH                   Write a Markdown test-run report
--report-dir DIRECTORY          Write one Markdown report for each build
--tester NAME                   Tester name written to the report
--evidence-dir PATH             Save failure/blocked screenshots
--list                          List test cases and exit
```

## Exit codes

- `0`: every selected execution passed
- `1`: at least one execution failed or was blocked
- `2`: the selected browser could not start
