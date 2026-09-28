# Test Case: TC-Multiply-008

## Test Case Information
- **Test Case ID**: TC-Multiply-008
- **Test Title**: Multiply large numbers (Boundary testing)
- **Feature Under Test**: Multiply function boundary behavior
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build**: Prototype (0)
- **Priority**: Medium

## Objective
Verify that multiplying two large numerical inputs returns the correct large integer value.

## Preconditions
1. Web browser is open.
2. User has navigated to `https://testsheepnz.github.io/BasicCalculator.html`.
3. The **Build** dropdown is set to `Prototype`.

## Test Data
| Parameter | Value |
| :--- | :--- |
| First Number (`#number1Field`) | `999999` |
| Second Number (`#number2Field`) | `999999` |
| Operation (`#selectOperationDropdown`) | `Multiply` (value: 2) |
| Integers Only (`#integerSelect`) | Unchecked |

## Test Steps
1. Select `Prototype` from the **Build** dropdown.
2. Enter `999999` into the **First Number** field.
3. Enter `999999` into the **Second Number** field.
4. Select `Multiply` from the **Operation** dropdown.
5. Click the **Calculate** button (`#calculateButton`).

## Expected Results
1. The **Answer** field (`#numberAnswerField`) displays `999998000001`.
2. The **Error Message** label (`#errorMsgField`) remains empty.
