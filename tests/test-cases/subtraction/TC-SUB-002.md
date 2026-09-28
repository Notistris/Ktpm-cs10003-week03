# TC-SUB-002: Subtraction produces a negative result

## Requirement ID
FR-SUB-01

## Module / Test type / Technique
Subtraction / Functional / Equivalence Partitioning

## Preconditions
- The Basic Calculator page is open
- Build `Prototype` is selected
- The calculator is ready for input

## Test data
| Field | Value |
|---|---|
| First number | `3` |
| Second number | `8` |
| Operation | `Subtract` |
| Integers only | Unchecked |

## Test steps
1. Enter `3` in **First number**
2. Enter `8` in **Second number**
3. Select `Subtract` from **Operation**
4. Leave **Integers only** unchecked
5. Click **Calculate**

## Expected result
The **Answer** field displays `-5` and no error message is shown.

## Status / Related bugs
Not Run / None
