# Test Run Report: Multiply Function - Build 9

## Test Run Information
- **Test Run Name**: Build 9 Regression Test Run
- **Build**: Build 9
- **Module**: Multiply
- **Execution Date**: 2026-09-28
- **Executed By**: Automated Playwright Script (`tests/test-scripts/multiply.test.js`)
- **Environment**: Chromium / Edge (Playwright Headless)
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html

## Summary of Results
| Total Executed | Passed | Failed | Pass Rate |
| :---: | :---: | :---: | :---: |
| 10 | 0 | 10 | 0% |

## Test Execution Details
| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "20", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-001 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "-24", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-002 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "42", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-003 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "0", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-004 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "10.5", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-005 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "8", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-006 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Error: "Number 1 is not a number", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-007 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Error: "Number 2 is not a number", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-008 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "999998000001", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |
| TC-Multiply-009 | Multiply | Automated Script | **Fail** | Bug #Build9-01 | Expected Answer: "", got Element state issue: calculateButton (hidden: true, disabled: true), number2Field (hidden: true). |

## Build Analysis & Observations
- **Build Behavior**: Build 9 hides and disables the Second Number input field and Calculate button.
- **Conclusion**: 10 test case(s) failed on Build 9 due to build-specific defects.
