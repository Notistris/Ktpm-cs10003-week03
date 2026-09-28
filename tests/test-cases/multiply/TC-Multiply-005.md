# Test Case: TC-Multiply-005

## Test Case Information
- **Test Case ID**: TC-Multiply-005
- **Test Title**: Multiply two floating-point numbers with "Integers only" option checked
- **Feature Under Test**: Multiply function with Integer formatting
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build**: Prototype (0)
- **Priority**: High

## Objective
Verify that when the "Integers only" checkbox is checked, the product of decimal numbers is truncated/parsed to an integer format (`parseInt`).

## Preconditions
1. Web browser is open.
2. User has navigated to `https://testsheepnz.github.io/BasicCalculator.html`.
3. The **Build** dropdown is set to `Prototype`.

## Test Data
| Parameter | Value |
| :--- | :--- |
| First Number (`#number1Field`) | `2.5` |
| Second Number (`#number2Field`) | `3.5` |
| Operation (`#selectOperationDropdown`) | `Multiply` (value: 2) |
| Integers Only (`#integerSelect`) | Checked |

## Test Steps
1. Select `Prototype` from the **Build** dropdown.
2. Enter `2.5` into the **First Number** field.
3. Enter `3.5` into the **Second Number** field.
4. Select `Multiply` from the **Operation** dropdown.
5. Check the **Integers only** checkbox (`#integerSelect`).
6. Click the **Calculate** button (`#calculateButton`).

## Expected Results
1. Floating-point product of `2.5 * 3.5` is `8.75`.
2. Because **Integers only** is enabled (`parseInt(8.75)`), the **Answer** field (`#numberAnswerField`) displays `8`.
3. The **Error Message** label (`#errorMsgField`) remains empty.
