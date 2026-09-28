# Test Run Report: Multiply Function - Build 7

## Test Run Information
- **Test Run Name**: Build 7 Regression Test Run
- **Build**: Build 7
- **Module**: Multiply
- **Execution Date**: 2026-09-28
- **Executed By**: Automated Playwright Script (`tests/test-scripts/multiply.test.js`)
- **Environment**: Chromium / Edge (Playwright Headless)
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html

## Summary of Results
| Total Executed | Passed | Failed | Pass Rate |
| :---: | :---: | :---: | :---: |
| 10 | 3 | 7 | 30% |

## Test Execution Details
| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "20", got Answer: "0". |
| TC-Multiply-001 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "-24", got Answer: "0". |
| TC-Multiply-002 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "42", got Answer: "0". |
| TC-Multiply-003 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "0" |
| TC-Multiply-004 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "10.5", got Answer: "0". |
| TC-Multiply-005 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "8", got Answer: "0". |
| TC-Multiply-006 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Error: "Number 1 is not a number", got Answer: "0". |
| TC-Multiply-007 | Multiply | Automated Script | **Pass** | - | Executed successfully. Error: "Number 2 is not a number" |
| TC-Multiply-008 | Multiply | Automated Script | **Fail** | Bug #Build7-01 | Expected Answer: "999998000001", got Answer: "0". |
| TC-Multiply-009 | Multiply | Automated Script | **Pass** | - | Executed successfully. Answer: "", Error: "", IntegersOnly: false |

## Build Analysis & Observations
- **Build Behavior**: Build 7 uses the previous answer value instead of First Number as the operand.
- **Conclusion**: 7 test case(s) failed on Build 7 due to build-specific defects.
