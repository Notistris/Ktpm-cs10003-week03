# AI Interaction Audit Log - Student 23120044

This file records completed user/assistant interactions from the current assignment session for the **Multiply** module testing of the Basic Calculator application. IDE transport metadata, internal reasoning, progress messages, tool calls, and tool outputs are excluded.

---

## Interaction 1

**Timestamp:** 2026-09-28 — exact time recorded in session metadata  
**Model:** Gemini 3.6 Flash / Antigravity Agent

### User prompt (verbatim)

```text
Here is a basic calculator website https://testsheepnz.github.io/BasicCalculator.html, create 10 test cases for the Multiply function. Each test case is an indiviual md file with naming convention of TC-Multiply-000 , TC- Multiply-001..., place it in this folder @[c:\Users\ACER\Documents\KTPM\BasicCalculator\Ktpm-cs10003-week03\tests\test-cases\TC-Multiply].
```

### AI output (verbatim)

```text
Created 10 test cases for the Multiply function in `tests/test-cases/TC-Multiply/`:

1. `TC-Multiply-000.md`: Multiply two positive integers (5 * 4 = 20)
2. `TC-Multiply-001.md`: Multiply a positive integer and a negative integer (8 * -3 = -24)
3. `TC-Multiply-002.md`: Multiply two negative integers (-6 * -7 = 42)
4. `TC-Multiply-003.md`: Multiply a number by zero (100 * 0 = 0)
5. `TC-Multiply-004.md`: Multiply two floating-point numbers without "Integers only" option (2.5 * 4.2 = 10.5)
6. `TC-Multiply-005.md`: Multiply two floating-point numbers with "Integers only" option checked (2.5 * 3.5 = 8.75 -> parseInt = 8)
7. `TC-Multiply-006.md`: Input non-numeric string into First Number field ("abc" * 5 -> "Number 1 is not a number")
8. `TC-Multiply-007.md`: Input non-numeric string into Second Number field (10 * "xyz" -> "Number 2 is not a number")
9. `TC-Multiply-008.md`: Multiply large numbers (Boundary testing: 999999 * 999999 = 999998000001)
10. `TC-Multiply-009.md`: Clear answer after multiplication operation
```

---

## Interaction 2

**Timestamp:** 2026-09-28 — exact time recorded in session metadata  
**Model:** Gemini 3.6 Flash / Antigravity Agent

### User prompt (verbatim)

```text
Now create an automated playwright script to run these 10 test case, remember that each script will ask the user to specify which build to run on, put the file in the @[c:\Users\ACER\Documents\KTPM\BasicCalculator\Ktpm-cs10003-week03\tests\test-scripts] folder
```

### AI output (verbatim)

```text
Automated Playwright test scripts have been created for all 10 Multiply test cases in `tests/test-scripts`:

1. `multiply.test.js`: Interactive terminal script asking the user to specify which build to test on (0: Prototype, 1-9: Builds 1-9), with support for CLI arguments (--build=0) and environment variables.
2. `TC-Multiply.spec.js`: Playwright Test Runner spec file executable via `npx playwright test`.
```

---

## Interaction 3

**Timestamp:** 2026-09-28 — exact time recorded in session metadata  
**Model:** Gemini 3.6 Flash / Antigravity Agent

### User prompt (verbatim)

```text
run this script on build 1-9, create a singular test run file for each build that capture the result of the testrun in @[c:\Users\ACER\Documents\KTPM\BasicCalculator\Ktpm-cs10003-week03\tests\test-runs]
```

### AI output (verbatim)

```text
Executed Playwright test script across Builds 1 through 9 and created 9 individual test run reports in `tests/test-runs/`:

- `build-1-test-run.md` (8 Pass / 2 Fail - Pass rate 80%)
- `build-2-test-run.md` (10 Pass / 0 Fail - Pass rate 100%)
- `build-3-test-run.md` (10 Pass / 0 Fail - Pass rate 100%)
- `build-4-test-run.md` (9 Pass / 1 Fail - Pass rate 90%)
- `build-5-test-run.md` (10 Pass / 0 Fail - Pass rate 100%)
- `build-6-test-run.md` (10 Pass / 0 Fail - Pass rate 100%)
- `build-7-test-run.md` (3 Pass / 7 Fail - Pass rate 30%)
- `build-8-test-run.md` (8 Pass / 2 Fail - Pass rate 80%)
- `build-9-test-run.md` (0 Pass / 10 Fail - Pass rate 0%)
```

---

## Interaction 4

**Timestamp:** 2026-09-28 — exact time recorded in session metadata  
**Model:** Gemini 3.6 Flash / Antigravity Agent

### User prompt (verbatim)

```text
Now generate bug report based on our test-runs result, take file in BUG@[c:\Users\ACER\Documents\KTPM\Ktpm-cs10003-week03\tests\bug-reports\concatenate\BUG\BUG-CONCAT-002.md] as guidelines, put them in a new folder name bug-reports/multiply/
```

### AI output (verbatim)

```text
Generated bug reports based on empirical test run results in `tests/bug-reports/multiply/`:

- `BUG-MULT-001.md`: Phép tính Multiply không kiểm tra dữ liệu hợp lệ khi nhập chuỗi (Build 1)
- `BUG-MULT-002.md`: Checkbox "Integers only" bị khóa bật làm tự động làm tròn số thập phân khi nhân (Build 4)
- `BUG-MULT-003.md`: Phép tính Multiply sử dụng giá trị kết quả cũ (answer) làm số bị nhân (Build 7)
- `BUG-MULT-004.md`: Phép tính Multiply hoán đổi vị trí ô First Number và Second Number (Build 8)
- `BUG-MULT-005.md`: Ô nhập liệu Second Number và nút Calculate bị ẩn hoàn toàn (Build 9)
- `TestRun_Multiply_Summary.md`: Báo cáo Tổng hợp Test Run Chức năng Multiply
```

---

## Interaction 5

**Timestamp:** 2026-09-28 — exact time recorded in session metadata  
**Model:** Gemini 3.6 Flash / Antigravity Agent

### User prompt (verbatim)

```text
now we'll write the report for my part, based on the other report of my team member, create a folder in @[c:\Users\ACER\Documents\KTPM\Ktpm-cs10003-week03\report] that has my id 23120044, in this create an ai-audit (our chat history uptill now), a git commit log showing my contribution and an empty ai critique file ready for me to write
```

### AI output (verbatim)

```text
Created report directory `report/23120044/` containing:
1. `ai-audit-report-23120044.md`: Complete AI Interaction Audit Log.
2. `git-commit-log-23120044.md`: Git commit log showing student contributions.
3. `ai-critique-23120044.md`: AI critique evaluation template ready for student input.
```
