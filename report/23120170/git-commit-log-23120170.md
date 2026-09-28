* commit e8bb5176a4505730da2d30030cf94d277f1cdcbe
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 19:46:51 2026 +0700
| 
|     AI audit
| 
|  report/ai-audit-report-23120170.md | 759 +++++++++++++++++++++++++++++++++++
|  report/ai-critique-23120170.md     |   4 +
|  2 files changed, 763 insertions(+)
| 
* commit 721c0309386583fd4d7583e253af4b31848391e2
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 19:20:53 2026 +0700
| 
|     feat(test): bug report
| 
|  tests/bug-reports/subtraction/BUG-SUB-001.md      |  50 ++++++++++++++++++
|  tests/bug-reports/subtraction/BUG-SUB-002.md      |  44 ++++++++++++++++
|  tests/bug-reports/subtraction/BUG-SUB-003.md      |  53 +++++++++++++++++++
|  tests/bug-reports/subtraction/BUG-SUB-004.md      |  54 ++++++++++++++++++++
|  .../subtraction/screenshot/BUG01-1.png            | Bin 0 -> 139988 bytes
|  .../subtraction/screenshot/BUG01-2.png            | Bin 0 -> 177413 bytes
|  .../bug-reports/subtraction/screenshot/BUG02.png  | Bin 0 -> 178486 bytes
|  .../bug-reports/subtraction/screenshot/BUG03.png  | Bin 0 -> 170023 bytes
|  .../bug-reports/subtraction/screenshot/BUG04.png  | Bin 0 -> 170070 bytes
|  .../subtraction/subtraction-build-1-test-run.md   |   4 +-
|  .../subtraction/subtraction-build-4-test-run.md   |   2 +-
|  .../subtraction/subtraction-build-7-test-run.md   |  16 +++---
|  .../subtraction/subtraction-build-8-test-run.md   |  18 +++----
|  .../subtraction/run_subtraction_tests.py          |  40 ++++++++++++++-
|  14 files changed, 260 insertions(+), 21 deletions(-)
| 
* commit 9f671d7bd3327bba85edad5fb66ea05c3a2becd3
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 18:17:45 2026 +0700
| 
|     feat(test): test run report for subtraction
| 
|  .../subtraction/subtraction-build-1-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-2-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-3-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-4-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-5-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-6-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-7-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-8-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-build-9-test-run.md   | 20 +++++++
|  .../subtraction/subtraction-prototype-test-run.md | 20 +++++++
|  tests/test-scripts/subtraction/README.md          | 12 +++++
|  .../subtraction/run_subtraction_tests.py          | 59 ++++++++++++++++-----
|  12 files changed, 259 insertions(+), 12 deletions(-)
| 
* commit 0b61d63156e2098dfff0811ee4e70b9be98c0504
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 18:01:56 2026 +0700
| 
|     feat(test): test script for subtraction testcase
| 
|  tests/test-scripts/subtraction/README.md          | 123 +++++++
|  tests/test-scripts/subtraction/requirements.txt   |   1 +
|  .../subtraction/run_subtraction_tests.py          | 355 ++++++++++++++++++++
|  3 files changed, 479 insertions(+)
| 
* commit c55662c3cbec07b55265818cb760d63aaf8ef366
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 18:01:28 2026 +0700
| 
|     chore: add gitignore
| 
|  .gitignore | 29 +++++++++++++++++++++++++++++
|  1 file changed, 29 insertions(+)
| 
* commit 3167a4dbfd223cbf6fb50c1132a29be8c53df79e
| Author: thu <thunguyendoanxuan0405@gmail.com>
| Date:   Mon Sep 28 17:39:59 2026 +0700
| 
|     feat(test): design 10 test cases for subtraction
| 
|  tests/test-cases/subtraction/TC-SUB-001.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-002.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-003.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-004.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-005.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-006.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-007.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-008.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-009.md | 33 ++++++++++++++++++++++++++++
|  tests/test-cases/subtraction/TC-SUB-010.md | 33 ++++++++++++++++++++++++++++
|  10 files changed, 330 insertions(+)
|   
| * commit cc7d2cdec3b606d5a5ba4d16e39040165d4996d2
|/  Author: GTEL - Tran Trong Tri <tttri1303@gmail.com>
|   Date:   Mon Sep 28 14:45:53 2026 +0700
|   
|       add: add module test cases
|   
|    tests/test-cases/TC-Add/README.md    | 26 ++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_01.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_02.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_03.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_04.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_05.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_06.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_07.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_08.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_09.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_10.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_11.md | 31 +++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_12.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_13.md | 25 +++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_14.md | 30 ++++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_15.md | 26 ++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_16.md | 29 +++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_17.md | 29 +++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_18.md | 29 +++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_19.md | 28 ++++++++++++++++++++++++++++
|    tests/test-cases/TC-Add/TC_ADD_20.md | 26 ++++++++++++++++++++++++++
|    tests/test-cases/placeholder.md      |  1 -
|    22 files changed, 609 insertions(+), 1 deletion(-)
|   
| * commit 8e754f596163781ecde271f562ba1b6d9d383876
|/  Author: hieu-tran-coding <tthieu.workmail@gmail.com>
|   Date:   Mon Sep 28 14:42:11 2026 +0700
|   
|       test: add test cases for multiplication operation
|   
|    tests/test-cases/TC-Multiply/TC-Multiply-000.md | 37 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-001.md | 37 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-002.md | 37 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-003.md | 37 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-004.md | 37 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-005.md | 38 ++++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-006.md | 36 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-007.md | 36 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-008.md | 36 +++++++++++++++++++
|    tests/test-cases/TC-Multiply/TC-Multiply-009.md | 40 +++++++++++++++++++++
|    10 files changed, 371 insertions(+)
| 
* commit 3d8d847572744361f3ad75cfd1b6b1fced5c3ac0
  Author: GTEL - Tran Trong Tri <tttri1303@gmail.com>
  Date:   Mon Sep 28 14:13:37 2026 +0700
  
      init repo
  
   src/placeholder.md              | 1 +
   tests/test-cases/placeholder.md | 1 +
   tests/test-runs/placeholder.md  | 1 +
   3 files changed, 3 insertions(+)
