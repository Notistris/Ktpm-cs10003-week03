# TC-SUB-008: Display a decimal subtraction result as an integer

## Requirement ID
FR-SUB-02

## Module / Test type / Technique
Subtraction / Functional / Decision Table

## Preconditions
- The Basic Calculator page is open
- Build `Prototype` is selected
- The calculator is ready for input

## Test data
| Field | Value |
|---|---|
| First number | `10.9` |
| Second number | `2.1` |
| Operation | `Subtract` |
| Integers only | Checked |

## Test steps
1. Enter `10.9` in **First number**
2. Enter `2.1` in **Second number**
3. Select `Subtract` from **Operation**
4. Check **Integers only**
5. Click **Calculate**

## Expected result
The subtraction result `8.8` is converted to an integer and the **Answer** field displays `8`.

## Status / Related bugs
Not Run / None
