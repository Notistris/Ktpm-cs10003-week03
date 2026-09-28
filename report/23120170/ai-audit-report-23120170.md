# AI Interaction Audit Log

This file records completed user/assistant interactions from the current assignment session. IDE transport metadata, internal reasoning, commentary/progress messages, tool calls, and tool output are excluded. Historical per-turn clock times were not available in the session transcript and are marked accordingly rather than inferred.

## Interaction 1

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
[03 - github\_bug\_management.pptx.pdf](<03 - github_bug_management.pptx.pdf>) is slide lesson. Assignment is to perform testing on [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html) web. each member is responsible for 1 module, i'm in the subtraction func. now create 10 test cases
````

### AI output (verbatim)

````text
Created 10 functional subtraction test cases covering:

- Positive, negative, equal, and zero results
- Negative operands
- Decimal subtraction
- Integer-only conversion
- Invalid input validation for both operands

They use **Prototype** as the reference build because the site identifies it as the correct implementation; builds 1–9 contain intentional faults. [Calculator source](https://github.com/TestSheepNZ/TestSheepNZ.github.io/blob/master/BasicCalculator.html)

File: [subtraction-test-cases.md](</D:/testing/Ktpm-cs10003-week03/tests/test-cases/subtraction-test-cases.md>)
````

## Interaction 2

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
no, you must follow the template in slide. like:&#x20;
├── tests/
│   ├── test-cases/
│   │   ├── login/
│   │   │   ├── TC-LOGIN-001.md
│   │   │   └── TC-LOGIN-002.md
│   │   ├── register/
│   │   └── checkout/
│   ├── test-runs/
│   │   ├── sprint-1-test-run.md
│   │   └── sprint-2-regression.md
convention: TC-[MODULE]-[NUMBER] &#x20;
template file test case:
\# TC-LOGIN-001: Đăng nhập thành công

\## Requirement ID
FR-LOGIN-01

\## Module / Test type / Technique
Login / Functional / Equivalence Partitioning

\## Preconditions
\- User đã có tài khoản hợp lệ
\- User đang ở trang Login

\## Test data
\| Email | user01\@gmail.com |
\| Password | Abc\@123456 |

\## Test steps
1\. Mở trang Login
2\. Nhập email và password hợp lệ
3\. Bấm Login

\## Expected result
Đăng nhập thành công và chuyển về Home.

\## Status / Related bugs
Not Run / None
in this assignment, we don't need to fix bug, just need to design test case, execute them (test run), bug report, issue on github.
bug report template:
Title: [BUG][Login] Hệ thống cho phép đăng nhập với password sai

\## Found by Test Case
TC-LOGIN-003

\## Requirement liên quan
FR-LOGIN-02

\## Severity / Priority
Major / P1

\## Environment
Browser, OS, URL, build/commit

\## Steps to reproduce
1\. Mở trang Login
2\. Nhập email hợp lệ
3\. Nhập password sai
4\. Bấm Login

\## Expected result
Không cho đăng nhập và hiển thị lỗi.

\## Actual result
Hệ thống vẫn đăng nhập thành công.

\## Evidence
Screenshot / video / console log
do u understand? do the first one, 10 test case for substract func
````

**Attachments:** Two image attachments were included with this prompt; binary image data is not transcribed into Markdown.

### AI output (verbatim)

````text
Understood and corrected.

Created 10 separate test-case files following the slide template and naming convention:

```text
tests/test-cases/subtraction/
├── TC-SUB-001.md
├── TC-SUB-002.md
├── TC-SUB-003.md
├── TC-SUB-004.md
├── TC-SUB-005.md
├── TC-SUB-006.md
├── TC-SUB-007.md
├── TC-SUB-008.md
├── TC-SUB-009.md
└── TC-SUB-010.md
```

Each includes:

- Requirement ID
- Module / Test type / Technique
- Preconditions
- Test data
- Test steps
- Expected result
- Status / Related bugs (`Not Run / None`)

The old combined file was removed. No test execution or bug reports were created yet.

Open: [TC-SUB-001.md](</D:/testing/Ktpm-cs10003-week03/tests/test-cases/subtraction/TC-SUB-001.md>)
````

## Interaction 3

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
nice, create folder test script / subtraction, write script to run these testcase, includes arguments to run specific tests or builds, and markdown for guidance
````

### AI output (verbatim)

````text
Created the Selenium automation suite at `tests/test-scripts/subtraction/`.

Files:

- [run_subtraction_tests.py](</D:/testing/Ktpm-cs10003-week03/tests/test-scripts/subtraction/run_subtraction_tests.py>)
- [README.md](</D:/testing/Ktpm-cs10003-week03/tests/test-scripts/subtraction/README.md>)
- [requirements.txt](</D:/testing/Ktpm-cs10003-week03/tests/test-scripts/subtraction/requirements.txt>)

The runner supports:

```powershell
# All tests on Prototype
python tests\test-scripts\subtraction\run_subtraction_tests.py

# Specific tests
python tests\test-scripts\subtraction\run_subtraction_tests.py --tests 1,8,10

# Specific builds
python tests\test-scripts\subtraction\run_subtraction_tests.py --builds Prototype,7,8

# Generate test-run report and failure screenshots
python tests\test-scripts\subtraction\run_subtraction_tests.py `
  --builds Prototype,7,8 `
  --report tests\test-runs\subtraction-test-run.md `
  --evidence-dir tests\test-runs\evidence\subtraction
```

All 10 test cases are represented in the script, and Python syntax validation passed. Selenium is not currently installed, so install it before execution:

```powershell
python -m pip install -r tests\test-scripts\subtraction\requirements.txt
```
````

## Interaction 4

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
create .gitignore for me and check error from [run\_subtraction\_tests.py](tests/test-scripts/subtraction/run_subtraction_tests.py) 
````

### AI output (verbatim)

````text
Created [.gitignore](</D:/testing/Ktpm-cs10003-week03/.gitignore>) covering:

- `venv/`, `.venv/`, `env/`
- Python caches and compiled files
- Test/tool caches
- `.env` files
- VS Code, JetBrains, and OS-generated files

Fixed [run_subtraction_tests.py](</D:/testing/Ktpm-cs10003-week03/tests/test-scripts/subtraction/run_subtraction_tests.py>): a Markdown bug-report example had accidentally been inserted at lines 10–38, causing the `SyntaxError`.

I also:

- Installed Selenium in the workspace `venv`
- Successfully launched headless Chrome
- Executed all 10 cases against Prototype
- Confirmed **10 passed, 0 failed, 0 blocked**
````

## Interaction 5

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
good, now run 10 test cases sequentially for 10 builds and report like this pic into @tests/test-runs/. use md file. 1 build is 1 md file
````

**Attachments:** One image attachment was included with this prompt; binary image data is not transcribed into Markdown.

### AI output (verbatim)

````text
Executed all 100 combinations sequentially: 10 test cases × 10 builds.

| Build | Pass | Fail | Blocked |
|---|---:|---:|---:|
| Prototype | 10 | 0 | 0 |
| 1 | 8 | 2 | 0 |
| 2 | 10 | 0 | 0 |
| 3 | 10 | 0 | 0 |
| 4 | 9 | 1 | 0 |
| 5 | 10 | 0 | 0 |
| 6 | 10 | 0 | 0 |
| 7 | 2 | 8 | 0 |
| 8 | 1 | 9 | 0 |
| 9 | 0 | 0 | 10 |
| **Total** | **70** | **20** | **10** |

Created ten reports in [tests/test-runs](</D:/testing/Ktpm-cs10003-week03/tests/test-runs>):

```text
subtraction-prototype-test-run.md
subtraction-build-1-test-run.md
subtraction-build-2-test-run.md
subtraction-build-3-test-run.md
subtraction-build-4-test-run.md
subtraction-build-5-test-run.md
subtraction-build-6-test-run.md
subtraction-build-7-test-run.md
subtraction-build-8-test-run.md
subtraction-build-9-test-run.md
```

Each report follows the slide columns:

- Test Case ID
- Module
- Tester (`thu`)
- Result
- Related Bug
- Note

Failed and blocked cases are marked `Pending GitHub issue` with the expected/actual result or clear blocking reason. Build 9 is blocked because its second-number and Calculate controls are hidden or disabled. The runner now also supports `--report-dir` and `--tester`.
````

## Interaction 6

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
good, now create bug report for fail testcase, template: Title: [BUG][Login] Hệ thống cho phép đăng nhập với password sai

\## Found by Test Case
TC-LOGIN-003

\## Requirement liên quan
FR-LOGIN-02

\## Severity / Priority
Major / P1

\## Environment
Browser, OS, URL, build/commit

\## Steps to reproduce
1\. Mở trang Login
2\. Nhập email hợp lệ
3\. Nhập password sai
4\. Bấm Login

\## Expected result
Không cho đăng nhập và hiển thị lỗi.

\## Actual result
Hệ thống vẫn đăng nhập thành công.

\## Evidence
Screenshot / video / console log
````

### AI output (verbatim)

````text
Created four bug reports for the four distinct defects behind all 20 failed executions:

- [BUG-SUB-001.md](</D:/testing/Ktpm-cs10003-week03/tests/bug-reports/subtraction/BUG-SUB-001.md>) — Build 1 does not validate non-numeric operands
- [BUG-SUB-002.md](</D:/testing/Ktpm-cs10003-week03/tests/bug-reports/subtraction/BUG-SUB-002.md>) — Build 4 incorrectly forces decimal results to integers
- [BUG-SUB-003.md](</D:/testing/Ktpm-cs10003-week03/tests/bug-reports/subtraction/BUG-SUB-003.md>) — Build 7 ignores the first operand
- [BUG-SUB-004.md](</D:/testing/Ktpm-cs10003-week03/tests/bug-reports/subtraction/BUG-SUB-004.md>) — Build 8 reverses the operands

Each report follows the required template and includes affected test cases, requirements, severity/priority, environment, reproduction steps, results, and evidence.

The Build 1, 4, 7, and 8 test-run reports now reference these bug IDs. The runner was also updated so future reports preserve these associations. Build 9 was excluded because its tests were `Blocked`, not `Fail`.
````

## Interaction 7

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
can you open these issue on github for me?
````

### AI output (verbatim)

````text
I can create the four issues, but GitHub access is not currently connected and the `gh` CLI is unavailable.

Please install/connect the suggested GitHub integration, then tell me it’s connected. I’ll create the issues in `Notistris/Ktpm-cs10003-week03` and update the local reports with their GitHub issue numbers and links.
````

## Interaction 8

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
give me content for the fields that need to be filled in, i'll create it myself
````

### AI output (verbatim)

````text
Use the following content to create four GitHub issues.

## Issue 1 — BUG-SUB-001

**Title**

```text
[BUG][Subtraction][Build 1] Non-numeric operands produce NaN instead of validation errors
```

**Labels**

```text
type: bug
module: subtraction
severity: major
priority: P1
result: fail
```

**Body**

```markdown
## Local Bug ID
BUG-SUB-001

## Found by Test Case
- TC-SUB-009
- TC-SUB-010

## Requirement liên quan
FR-SUB-03

## Severity / Priority
Major / P1

## Environment
- Browser: Google Chrome 153.0.8010.53
- OS: Windows 11 (10.0.26100.0)
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Calculator build: 1
- Test repository commit: `9f671d7`

## Steps to reproduce
1. Open the Basic Calculator page.
2. Select Build `1`.
3. Enter `abc` in **First number**.
4. Enter `5` in **Second number**.
5. Select `Subtract`.
6. Click **Calculate**.
7. Repeat with `5` in **First number** and `xyz` in **Second number**.

## Expected result
The calculator rejects the non-numeric operand and displays `Number 1 is not a number` or `Number 2 is not a number` for the corresponding field. No answer is produced.

## Actual result
The calculator accepts the non-numeric operand and displays `NaN` in the **Answer** field without a validation error.

## Evidence
- Test run: `tests/test-runs/subtraction/subtraction-build-1-test-run.md`
- TC-SUB-009 actual result: `Answer: NaN`
- TC-SUB-010 actual result: `Answer: NaN`
```

## Issue 2 — BUG-SUB-002

**Title**

```text
[BUG][Subtraction][Build 4] Decimal result is forced to an integer when Integers only is unchecked
```

**Labels**

```text
type: bug
module: subtraction
severity: major
priority: P1
result: fail
```

**Body**

```markdown
## Local Bug ID
BUG-SUB-002

## Found by Test Case
TC-SUB-007

## Requirement liên quan
FR-SUB-01

## Severity / Priority
Major / P1

## Environment
- Browser: Google Chrome 153.0.8010.53
- OS: Windows 11 (10.0.26100.0)
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Calculator build: 4
- Test repository commit: `9f671d7`

## Steps to reproduce
1. Open the Basic Calculator page.
2. Select Build `4`.
3. Enter `10.75` in **First number**.
4. Enter `2.25` in **Second number**.
5. Select `Subtract`.
6. Leave **Integers only** unchecked.
7. Click **Calculate**.

## Expected result
The **Answer** field displays the complete decimal result `8.5`.

## Actual result
The **Answer** field displays `8`, even though **Integers only** is unchecked.

## Evidence
- Test run: `tests/test-runs/subtraction/subtraction-build-4-test-run.md`
- Expected result: `Answer: 8.5`
- Actual result: `Answer: 8`
```

## Issue 3 — BUG-SUB-003

**Title**

```text
[BUG][Subtraction][Build 7] First operand is ignored during subtraction
```

**Labels**

```text
type: bug
module: subtraction
severity: major
priority: P1
result: fail
```

**Body**

```markdown
## Local Bug ID
BUG-SUB-003

## Found by Test Case
- TC-SUB-001
- TC-SUB-002
- TC-SUB-003
- TC-SUB-005
- TC-SUB-006
- TC-SUB-007
- TC-SUB-008
- TC-SUB-009

## Requirement liên quan
- FR-SUB-01
- FR-SUB-02
- FR-SUB-03

## Severity / Priority
Major / P1

## Environment
- Browser: Google Chrome 153.0.8010.53
- OS: Windows 11 (10.0.26100.0)
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Calculator build: 7
- Test repository commit: `9f671d7`

## Steps to reproduce
1. Open the Basic Calculator page.
2. Select Build `7`.
3. Enter `25` in **First number**.
4. Enter `10` in **Second number**.
5. Select `Subtract`.
6. Click **Calculate**.

## Expected result
The calculator evaluates `25 - 10` and displays `15`.

## Actual result
The calculator ignores the entered first operand and displays `-10`.

The same behavior causes eight subtraction test cases to fail, including decimal, integer-only, and first-operand validation scenarios.

## Evidence
- Test run: `tests/test-runs/subtraction/subtraction-build-7-test-run.md`
- TC-SUB-001 expected result: `Answer: 15`
- TC-SUB-001 actual result: `Answer: -10`
- Eight affected test cases are recorded in the test-run report
```

## Issue 4 — BUG-SUB-004

**Title**

```text
[BUG][Subtraction][Build 8] First and second operands are reversed
```

**Labels**

```text
type: bug
module: subtraction
severity: major
priority: P1
result: fail
```

**Body**

```markdown
## Local Bug ID
BUG-SUB-004

## Found by Test Case
- TC-SUB-001
- TC-SUB-002
- TC-SUB-004
- TC-SUB-005
- TC-SUB-006
- TC-SUB-007
- TC-SUB-008
- TC-SUB-009
- TC-SUB-010

## Requirement liên quan
- FR-SUB-01
- FR-SUB-02
- FR-SUB-03

## Severity / Priority
Major / P1

## Environment
- Browser: Google Chrome 153.0.8010.53
- OS: Windows 11 (10.0.26100.0)
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Calculator build: 8
- Test repository commit: `9f671d7`

## Steps to reproduce
1. Open the Basic Calculator page.
2. Select Build `8`.
3. Enter `25` in **First number**.
4. Enter `10` in **Second number**.
5. Select `Subtract`.
6. Click **Calculate**.

## Expected result
The calculator evaluates `25 - 10` and displays `15`.

## Actual result
The calculator reverses the operands, evaluates `10 - 25`, and displays `-15`.

Validation errors also refer to the opposite input field. Nine subtraction test cases fail because of the reversed operands.

## Evidence
- Test run: `tests/test-runs/subtraction/subtraction-build-8-test-run.md`
- TC-SUB-001 expected result: `Answer: 15`
- TC-SUB-001 actual result: `Answer: -15`
- Nine affected test cases are recorded in the test-run report
```

Assign the issues to yourself if required. After creating them, replace `BUG-SUB-001` through `BUG-SUB-004` in the test-run reports with the corresponding GitHub issue numbers, such as `#12`.
````

## Interaction 9

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
replace for me:
[https://github.com/Notistris/Ktpm-cs10003-week03/issues/2](https://github.com/Notistris/Ktpm-cs10003-week03/issues/2)
[https://github.com/Notistris/Ktpm-cs10003-week03/issues/3](https://github.com/Notistris/Ktpm-cs10003-week03/issues/3)
[https://github.com/Notistris/Ktpm-cs10003-week03/issues/4](https://github.com/Notistris/Ktpm-cs10003-week03/issues/4)
[https://github.com/Notistris/Ktpm-cs10003-week03/issues/5](https://github.com/Notistris/Ktpm-cs10003-week03/issues/5)
and i took screenshot (on calculator web), append it into evidence, @tests/bug-reports/subtraction/screenshot
````

### AI output (verbatim)

````text
Updated all references:

- `BUG-SUB-001` → GitHub [#2](https://github.com/Notistris/Ktpm-cs10003-week03/issues/2)
- `BUG-SUB-002` → GitHub [#3](https://github.com/Notistris/Ktpm-cs10003-week03/issues/3)
- `BUG-SUB-003` → GitHub [#4](https://github.com/Notistris/Ktpm-cs10003-week03/issues/4)
- `BUG-SUB-004` → GitHub [#5](https://github.com/Notistris/Ktpm-cs10003-week03/issues/5)

Changes applied to:

- All four [bug reports](</D:/testing/Ktpm-cs10003-week03/tests/bug-reports/subtraction>)
- Related Bug columns in Builds 1, 4, 7, and 8 test runs
- Future report mappings in the Selenium runner

All five screenshots are now embedded under each report’s Evidence section using valid relative paths. Python syntax and screenshot links were verified successfully.
````

## Interaction 10

**Timestamp:** 2026-09-28 — exact time unavailable in session transcript  
**Model:** GPT-5

### User prompt (verbatim)

````text
so every place holder of subtraction filled, can i submit this asssignment?
````

### AI output (verbatim)

````text
Almost—but don’t submit yet.

Completed:

- 10 test-case designs
- Executable Selenium script and guidance
- 10 build-specific test-run reports
- 4 bug reports covering all 20 failed executions
- GitHub issue links `#2–#5`
- 5 screenshot evidence files

Before submission:

1. Build 9 still contains `Pending GitHub issue`. Either create another issue or replace it with `N/A` because the Note already explains the blocking reason.
2. Commit the latest modified reports, bug reports, and screenshots.
3. Push branch `test/subtract-thu`; it currently has no upstream branch.
4. Do not accidentally commit `se-metadata.json` or the lesson PDF.
5. Ensure issues `#2–#5` have the required labels and screenshots on GitHub. I couldn’t independently inspect their remote contents.

`Not Run / None` inside the test-case design files is acceptable because execution results are recorded separately in `tests/test-runs/`.

Suggested submission commands:

```powershell
git add tests/test-runs/subtraction `
        tests/test-scripts/subtraction `
        tests/bug-reports/subtraction

git commit -m "test(subtraction): add bug reports and evidence"
git push -u origin test/subtract-thu
```

After resolving Build 9’s `Pending GitHub issue` entries and pushing, the subtraction assignment is ready to submit.
````

## Interaction 11

**Timestamp:** 2026-09-28T19:26:00.3920866+07:00  
**Model:** GPT-5

### User prompt (verbatim)

````text
expose all prompt log in this session (verbatim, not change or regenerate anything), expose with model name, date time, my prompt, AI output. in [ai-audit-report-23120170.md](ai-audit-report-23120170.md) 
````

### AI output (verbatim)

````text
Completed. I appended the session’s completed user/assistant interactions to [ai-audit-report-23120170.md](</D:/testing/Ktpm-cs10003-week03/ai-audit-report-23120170.md>). Editor metadata, tool calls, progress commentary, internal reasoning, and the aborted duplicate submission-readiness prompt were excluded under the audit-log rules. Historical exact times were unavailable, so each entry records the date and explicitly marks the time unavailable rather than inventing it. Model recorded as `GPT-5`.
````

## Signature

| Information | Value |
|---|---|
| Name | Nguyễn Đoàn Xuân Thu |
| MSSV | 23120170 |
| Class / Cohort | 23_31 / 2023 |
| Course | CSC130003 |
| Instructor | Dr. Lam Quang Vu, Dr. Tran Duy Hoang, MSc. Tran Thi Bich Hanh, MSc. Truong Phuoc Loc, MSc. Ho Tuan Thanh |
| Date | 28/09/2026 |
| Signature | Thu |