# Test Run Report: Multiply Function - Build 4

## Test Run Information
- **Test Run Name**: Build 4 Regression Test Run
- **Build**: Build 4
- **Module**: Multiply
- **Execution Date**: 2026-09-28
- **Executed By**: Automated Playwright Script (`tests/test-scripts/multiply.test.js`)
- **Environment**: Chromium / Edge (Playwright Headless)
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html

## Summary of Results
| Total Executed | Passed | Failed | Pass Rate |
| :---: | :---: | :---: | :---: |
| 10 | 9 | 1 | 90% |

## Test Execution Details
| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "20" |
| TC-Multiply-001 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "-24" |
| TC-Multiply-002 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "42" |
| TC-Multiply-003 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "0" |
| TC-Multiply-004 | Multiply | Automated Script | **Fail** | Bug #Build4-01 | Expected Answer: "10.5", got Answer: "10". |
| TC-Multiply-005 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "8" |
| TC-Multiply-006 | Multiply | Automated Script | **Pass** | - | Executed successfully. Error: "Number 1 is not a number" |
| TC-Multiply-007 | Multiply | Automated Script | **Pass** | - | Executed successfully. Error: "Number 2 is not a number" |
| TC-Multiply-008 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "999998000001" |
| TC-Multiply-009 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "", Error: "", IntegersOnly: false |

## Build Analysis & Observations
- **Build Behavior**: Build 4 locks the 'Integers only' selection to checked for mathematical operations.
- **Conclusion**: 1 test case(s) failed on Build 4 due to build-specific defects.
