# Test Case: TC-Multiply-004

## Test Case Information
- **Test Case ID**: TC-Multiply-004
- **Test Title**: Multiply two floating-point numbers without "Integers only" option
- **Feature Under Test**: Multiply function
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build**: Prototype (0)
- **Priority**: High

## Objective
Verify that multiplying two decimal values returns the correct floating-point product when "Integers only" is unchecked.

## Preconditions
1. Web browser is open.
2. User has navigated to `https://testsheepnz.github.io/BasicCalculator.html`.
3. The **Build** dropdown is set to `Prototype`.

## Test Data
| Parameter | Value |
| :--- | :--- |
| First Number (`#number1Field`) | `2.5` |
| Second Number (`#number2Field`) | `4.2` |
| Operation (`#selectOperationDropdown`) | `Multiply` (value: 2) |
| Integers Only (`#integerSelect`) | Unchecked |

## Test Steps
1. Select `Prototype` from the **Build** dropdown.
2. Enter `2.5` into the **First Number** field.
3. Enter `4.2` into the **Second Number** field.
4. Select `Multiply` from the **Operation** dropdown.
5. Ensure the **Integers only** checkbox is unchecked.
6. Click the **Calculate** button (`#calculateButton`).

## Expected Results
1. The **Answer** field (`#numberAnswerField`) displays `10.5`.
2. The **Error Message** label (`#errorMsgField`) remains empty.
