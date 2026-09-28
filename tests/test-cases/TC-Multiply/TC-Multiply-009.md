# Test Case: TC-Multiply-009

## Test Case Information
- **Test Case ID**: TC-Multiply-009
- **Test Title**: Clear answer after multiplication operation
- **Feature Under Test**: Clear function post-multiplication
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build**: Prototype (0)
- **Priority**: Medium

## Objective
Verify that clicking the "Clear" button resets the Answer field, Integers only checkbox, and clears error messages after completing a multiplication operation.

## Preconditions
1. Web browser is open.
2. User has navigated to `https://testsheepnz.github.io/BasicCalculator.html`.
3. The **Build** dropdown is set to `Prototype`.

## Test Data
| Parameter | Value |
| :--- | :--- |
| First Number (`#number1Field`) | `12` |
| Second Number (`#number2Field`) | `3` |
| Operation (`#selectOperationDropdown`) | `Multiply` (value: 2) |
| Integers Only (`#integerSelect`) | Checked |

## Test Steps
1. Select `Prototype` from the **Build** dropdown.
2. Enter `12` into the **First Number** field.
3. Enter `3` into the **Second Number** field.
4. Select `Multiply` from the **Operation** dropdown.
5. Check the **Integers only** checkbox (`#integerSelect`).
6. Click the **Calculate** button (`#calculateButton`).
7. Verify that the **Answer** field displays `36`.
8. Click the **Clear** button (`#clearButton`).

## Expected Results
1. The **Answer** field (`#numberAnswerField`) is reset to empty (`""`).
2. The **Integers only** checkbox (`#integerSelect`) is reset to unchecked (`false`).
3. The **Error Message** label (`#errorMsgField`) is cleared.
