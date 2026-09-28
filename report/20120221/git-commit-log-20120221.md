* commit 8f4fc562bb8f4cf610fe91d6fd256af8ea3080c5 (HEAD -> test/add-module)
| Author: GTEL - Tran Trong Tri <tttri1303@gmail.com>
| Date:   Mon Sep 28 23:11:17 2026 +0700
| 
|     test: add module test scripts, run reports, bug reports and ai audit report
| 
|  .gitignore                                   |   8 +   
|  report/20120221/ai-audit-report-20120221.md  | 159 ++++
|  tests/bug-reports/TC-Add/BUG-B1-01.md        |  52 ++  
|  tests/bug-reports/TC-Add/BUG-B2-01.md        |  49 ++  
|  tests/bug-reports/TC-Add/BUG-B3-01.md        |  45 +   
|  tests/bug-reports/TC-Add/BUG-B4-01.md        |  49 ++  
|  tests/bug-reports/TC-Add/BUG-B5-01.md        |  41 +   
|  tests/bug-reports/TC-Add/BUG-B6-01.md        |  43 + 
|  tests/bug-reports/TC-Add/BUG-B7-01.md        |  39 + 
|  tests/bug-reports/TC-Add/BUG-B8-01.md        |  41 + 
|  tests/bug-reports/TC-Add/BUG-B9-01.md        |  48 ++
|  tests/bug-reports/TC-Add/README.md           |  36 + 
|  tests/test-runs/TC-Add/README.md             |  50 ++
|  tests/test-runs/TC-Add/build-0.md            |  44 +
|  tests/test-runs/TC-Add/build-1.md            | 133 +++
|  tests/test-runs/TC-Add/build-2.md            | 606 ++++++++++++++
|  tests/test-runs/TC-Add/build-3.md            |  66 ++
|  tests/test-runs/TC-Add/build-4.md            | 451 ++++++++++    
|  tests/test-runs/TC-Add/build-5.md            |  66 ++
|  tests/test-runs/TC-Add/build-6.md            |  66 ++
|  tests/test-runs/TC-Add/build-7.md            | 493 +++++++++++
|  tests/test-runs/TC-Add/build-8.md            | 126 +++
|  tests/test-runs/TC-Add/build-9.md            | 744 +++++++++++++++++
|  tests/test-runs/placeholder.md               |   1 -
|  .../TC-Add/scripts/calculator.helper.js      |  62 ++
|  .../TC-Add/scripts/create-github-issues.js   | 150 ++++
|  .../TC-Add/scripts/package-lock.json         |  60 ++
|  .../test-scripts/TC-Add/scripts/package.json |  26 +
|  .../TC-Add/scripts/playwright.config.js      |  88 ++
|  .../test-scripts/TC-Add/scripts/run-tests.js | 656 +++++++++++++++
|  .../TC-Add/specs/TC_ADD_01.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_02.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_03.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_04.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_05.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_06.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_07.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_08.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_09.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_10.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_11.spec.js           |  25 +
|  .../TC-Add/specs/TC_ADD_12.spec.js           |  28 +
|  .../TC-Add/specs/TC_ADD_13.spec.js           |  32 +
|  .../TC-Add/specs/TC_ADD_14.spec.js           |  24 +
|  .../TC-Add/specs/TC_ADD_15.spec.js           |  28 +
|  .../TC-Add/specs/TC_ADD_16.spec.js           |  23 +
|  .../TC-Add/specs/TC_ADD_17.spec.js           |  23 +
|  .../TC-Add/specs/TC_ADD_18.spec.js           |  23 +
|  .../TC-Add/specs/TC_ADD_19.spec.js           |  24 +
|  .../TC-Add/specs/TC_ADD_20.spec.js           |  30 +
|  50 files changed, 5007 insertions(+), 1 deletion(-)
|
* commit cc7d2cdec3b606d5a5ba4d16e39040165d4996d2 (origin/test/add-module)
| Author: GTEL - Tran Trong Tri <tttri1303@gmail.com>
| Date:   Mon Sep 28 14:45:53 2026 +0700
|
|     add: add module test cases
|
|  tests/test-cases/TC-Add/README.md    | 26 +++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_01.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_02.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_03.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_04.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_05.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_06.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_07.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_08.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_09.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_10.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_11.md | 31 ++++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_12.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_13.md | 25 +++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_14.md | 30 +++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_15.md | 26 +++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_16.md | 29 ++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_17.md | 29 ++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_18.md | 29 ++++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_19.md | 28 +++++++++++++++++++++++
|  tests/test-cases/TC-Add/TC_ADD_20.md | 26 +++++++++++++++++++++
|  tests/test-cases/placeholder.md      |  1 -
|  22 files changed, 609 insertions(+), 1 deletion(-)
|
| * commit 443a9aeeb93f7b30fe58d3447d9f206514d494dd (origin/main, origin/HEAD)
|/| Merge: 3d8d847 c1ff12b
| | Author: Hoa <23120127@student.hcmus.edu.vn>
| | Date:   Mon Sep 28 18:33:04 2026 +0700
| |
| |     Merge pull request #1 from Notistris/Tests/Concat
| |     
| |     Tests/concat
| | 
| * commit c1ff12b90aa10fccde01ed9e4627c5a2f0b79cd7 (origin/Tests/Concat)
| | Author: tronghoa <yr2tt8y4j6@privaterelay.appleid.com>
| | Date:   Mon Sep 28 18:31:06 2026 +0700
| |
| |     ADD : Concat Test-Script & Concat Test-run
| |
| |  .gitignore                             |   1 +
| |  package-lock.json                      | 336 +++++++++++++
| |  package.json                           |  50 ++
| |  .../TC-CALC-CONCAT-001.md              |   0
| |  .../TC-CALC-CONCAT-002.md              |   0
| |  .../TC-CALC-CONCAT-003.md              |   0
| |  .../TC-CALC-CONCAT-004.md              |   0
| |  .../TC-CALC-CONCAT-005.md              |   0
| |  .../TC-CALC-CONCAT-006.md              |   0
| |  .../TC-CALC-CONCAT-007.md              |   0
| |  .../TC-CALC-CONCAT-008.md              |   0
| |  .../TC-CALC-CONCAT-009.md              |   0
| |  .../TC-CALC-CONCAT-010.md              |   0
| |  .../TC-CALC-CONCAT-011.md              |   0
| |  .../TC-CALC-CONCAT-012.md              |   0
| |  .../test-run-concat-builds.md          | 174 +++++++
| |  tests/test-script/run_concat_tests.js  | 138 +++++
| |  17 files changed, 699 insertions(+)
| |
| * commit 4594833d0b383a95a1ff9755b433f834bc150ab7
|/  Author: tronghoa <yr2tt8y4j6@privaterelay.appleid.com>
|   Date:   Mon Sep 28 17:43:09 2026 +0700
|
|       ADD : Testcase CONCATERATE
|
|    .../TC-CONCATENATE/TC-CALC-CONCAT-001.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-002.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-003.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-004.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-005.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-006.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-007.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-008.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-009.md    | 26 ++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-010.md    | 30 +++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-011.md    | 29 ++++++++++++++++
|    .../TC-CONCATENATE/TC-CALC-CONCAT-012.md    | 29 ++++++++++++++++
|    12 files changed, 346 insertions(+)
|
| * commit 8e754f596163781ecde271f562ba1b6d9d383876 (origin/Multiply-test)
|/  Author: hieu-tran-coding <tthieu.workmail@gmail.com>
|   Date:   Mon Sep 28 14:42:11 2026 +0700
|
|       test: add test cases for multiplication operation
|
|    .../TC-Multiply/TC-Multiply-000.md          | 37 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-001.md          | 37 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-002.md          | 37 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-003.md          | 37 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-004.md          | 37 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-005.md          | 38 ++++++++++++++++
|    .../TC-Multiply/TC-Multiply-006.md          | 36 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-007.md          | 36 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-008.md          | 36 +++++++++++++++
|    .../TC-Multiply/TC-Multiply-009.md          | 40 +++++++++++++++++
|    10 files changed, 371 insertions(+)
| 
* commit 3d8d847572744361f3ad75cfd1b6b1fced5c3ac0 (main)
  Author: GTEL - Tran Trong Tri <tttri1303@gmail.com>
  Date:   Mon Sep 28 14:13:37 2026 +0700
  
      init repo

   src/placeholder.md              | 1 +
   tests/test-cases/placeholder.md | 1 +
   tests/test-runs/placeholder.md  | 1 +
   3 files changed, 3 insertions(+)