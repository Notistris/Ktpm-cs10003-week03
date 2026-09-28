# Test Case: TC-Multiply-007

## Test Case Information
- **Test Case ID**: TC-Multiply-007
- **Test Title**: Input non-numeric string into Second Number field
- **Feature Under Test**: Multiply function validation
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build**: Prototype (0)
- **Priority**: High

## Objective
Verify that entering a non-numeric string into the Second Number field triggers an appropriate error message and prevents calculation.

## Preconditions
1. Web browser is open.
2. User has navigated to `https://testsheepnz.github.io/BasicCalculator.html`.
3. The **Build** dropdown is set to `Prototype`.

## Test Data
| Parameter | Value |
| :--- | :--- |
| First Number (`#number1Field`) | `10` |
| Second Number (`#number2Field`) | `xyz` |
| Operation (`#selectOperationDropdown`) | `Multiply` (value: 2) |
| Integers Only (`#integerSelect`) | Unchecked |

## Test Steps
1. Select `Prototype` from the **Build** dropdown.
2. Enter `10` into the **First Number** field.
3. Enter `xyz` into the **Second Number** field.
4. Select `Multiply` from the **Operation** dropdown.
5. Click the **Calculate** button (`#calculateButton`).

## Expected Results
1. The **Error Message** label (`#errorMsgField`) displays `Number 2 is not a number`.
2. The **Answer** field (`#numberAnswerField`) remains empty (or cleared).
