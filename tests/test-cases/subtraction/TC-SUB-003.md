# TC-SUB-003: Subtract two equal numbers

## Requirement ID
FR-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- The Basic Calculator page is open
- Build `Prototype` is selected
- The calculator is ready for input

## Test data
| Field | Value |
|---|---|
| First number | `42` |
| Second number | `42` |
| Operation | `Subtract` |
| Integers only | Unchecked |

## Test steps
1. Enter `42` in **First number**
2. Enter `42` in **Second number**
3. Select `Subtract` from **Operation**
4. Leave **Integers only** unchecked
5. Click **Calculate**

## Expected result
The **Answer** field displays `0` and no error message is shown.

## Status / Related bugs
Not Run / None
