# TC-SUB-010: Reject non-numeric input in the second number

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
| First number | `5` |
| Second number | `xyz` |
| Operation | `Subtract` |
| Integers only | Unchecked |

## Test steps
1. Enter `5` in **First number**
2. Enter `xyz` in **Second number**
3. Select `Subtract` from **Operation**
4. Leave **Integers only** unchecked
5. Click **Calculate**

## Expected result
The error message `Number 2 is not a number` is displayed and no new answer is produced.

## Status / Related bugs
Not Run / None
