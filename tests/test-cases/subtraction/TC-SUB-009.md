# TC-SUB-009: Reject non-numeric input in the first number

## Requirement ID
FR-SUB-03

## Module / Test type / Technique
Subtraction / Negative / Equivalence Partitioning

## Preconditions
- The Basic Calculator page is open
- Build `Prototype` is selected
- The calculator is ready for input

## Test data
| Field | Value |
|---|---|
| First number | `abc` |
| Second number | `5` |
| Operation | `Subtract` |
| Integers only | Unchecked |

## Test steps
1. Enter `abc` in **First number**
2. Enter `5` in **Second number**
3. Select `Subtract` from **Operation**
4. Leave **Integers only** unchecked
5. Click **Calculate**

## Expected result
The error message `Number 1 is not a number` is displayed and no new answer is produced.

## Status / Related bugs
Not Run / None
