# Test Run Report: Multiply Function - Build 3

## Test Run Information
- **Test Run Name**: Build 3 Regression Test Run
- **Build**: Build 3
- **Module**: Multiply
- **Execution Date**: 2026-09-28
- **Executed By**: Automated Playwright Script (`tests/test-scripts/multiply.test.js`)
- **Environment**: Chromium / Edge (Playwright Headless)
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html

## Summary of Results
| Total Executed | Passed | Failed | Pass Rate |
| :---: | :---: | :---: | :---: |
| 10 | 10 | 0 | 100% |

## Test Execution Details
| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "20" |
| TC-Multiply-001 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "-24" |
| TC-Multiply-002 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "42" |
| TC-Multiply-003 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "0" |
| TC-Multiply-004 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "10.5" |
| TC-Multiply-005 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "8" |
| TC-Multiply-006 | Multiply | Automated Script | **Pass** | - | Executed successfully. Error: "Number 1 is not a number" |
| TC-Multiply-007 | Multiply | Automated Script | **Pass** | - | Executed successfully. Error: "Number 2 is not a number" |
| TC-Multiply-008 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "999998000001" |
| TC-Multiply-009 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "", Error: "", IntegersOnly: false |

## Build Analysis & Observations
- **Build Behavior**: Build 3 always treats inputs as numbers; Multiply is unaffected.
- **Conclusion**: All Multiply function test cases passed on Build 3.
