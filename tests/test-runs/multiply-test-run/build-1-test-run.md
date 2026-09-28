# Test Run Report: Multiply Function - Build 1

## Test Run Information
- **Test Run Name**: Build 1 Regression Test Run
- **Build**: Build 1
- **Module**: Multiply
- **Execution Date**: 2026-09-28
- **Executed By**: Automated Playwright Script (`tests/test-scripts/multiply.test.js`)
- **Environment**: Chromium / Edge (Playwright Headless)
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html

## Summary of Results
| Total Executed | Passed | Failed | Pass Rate |
| :---: | :---: | :---: | :---: |
| 10 | 8 | 2 | 80% |

## Test Execution Details
| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "20" |
| TC-Multiply-001 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "-24" |
| TC-Multiply-002 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "42" |
| TC-Multiply-003 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "0" |
| TC-Multiply-004 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "10.5" |
| TC-Multiply-005 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "8" |
| TC-Multiply-006 | Multiply | Automated Script | **Fail** | Bug #Build1-01 | Expected Error: "Number 1 is not a number", got Answer: "NaN". |
| TC-Multiply-007 | Multiply | Automated Script | **Fail** | Bug #Build1-01 | Expected Error: "Number 2 is not a number", got Answer: "NaN". |
| TC-Multiply-008 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "999998000001" |
| TC-Multiply-009 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "", Error: "", IntegersOnly: false |

## Build Analysis & Observations
- **Build Behavior**: Build 1 does not validate if input fields contain valid numerical values.
- **Conclusion**: 2 test case(s) failed on Build 1 due to build-specific defects.
