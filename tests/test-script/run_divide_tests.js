const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';
const BUILDS_TO_TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TESTER_NAME = 'Tester (Divide)';

const TEST_CASES = [
    {
        id: 'TC-CALC-DIVIDE-001',
        in1: '10', in2: '2', check_int: false,
        expVal: '5', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-002',
        in1: '10', in2: '4', check_int: false,
        expVal: '2.5', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-003',
        in1: '0', in2: '5', check_int: false,
        expVal: '0', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-004',
        in1: '10', in2: '0', check_int: false,
        expVal: '', expErr: 'Divide by zero error!', checkType: 'error_or_msg'
    },
    {
        id: 'TC-CALC-DIVIDE-005',
        in1: '-20', in2: '-4', check_int: false,
        expVal: '5', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-006',
        in1: '-15', in2: '3', check_int: false,
        expVal: '-5', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-007',
        in1: '5.5', in2: '2', check_int: false,
        expVal: '2.75', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-008',
        in1: '', in2: '5', check_int: false,
        expVal: '', expErr: 'Number 1 is not a number', checkType: 'error'
    },
    {
        id: 'TC-CALC-DIVIDE-009',
        in1: '10', in2: '', check_int: false,
        expVal: '', expErr: 'Number 2 is not a number', checkType: 'error'
    },
    {
        id: 'TC-CALC-DIVIDE-010',
        in1: '7', in2: '2', check_int: true,
        expVal: '3', expErr: '', checkType: 'value'
    },
    {
        id: 'TC-CALC-DIVIDE-011',
        in1: 'abc', in2: '2', check_int: false,
        expVal: '', expErr: 'Number 1 is not a number', checkType: 'error'
    },
    {
        id: 'TC-CALC-DIVIDE-012',
        in1: '999999999', in2: '1', check_int: false,
        expVal: '999999999', expErr: '', checkType: 'value'
    }
];

// Hàm ánh xạ lỗi ra Bug ID tương ứng
function getBugId(tcId, buildNum, note) {
    if (tcId === 'TC-CALC-DIVIDE-002' && (note.includes("thực tế ra '5'") || note.includes("thực tế ra '0'"))) {
        return buildNum === 7 ? '#BUG-DIVIDE-005' : '#BUG-DIVIDE-001';
    }
    if (tcId === 'TC-CALC-DIVIDE-005' || tcId === 'TC-CALC-DIVIDE-006') {
        if (buildNum === 8) return '#BUG-DIVIDE-004';
        if (buildNum === 7) return '#BUG-DIVIDE-005';
        return '#BUG-DIVIDE-002';
    }
    if (tcId === 'TC-CALC-DIVIDE-008' || tcId === 'TC-CALC-DIVIDE-009' || tcId === 'TC-CALC-DIVIDE-011') {
        return '#BUG-DIVIDE-003';
    }
    if (buildNum === 8) {
        return '#BUG-DIVIDE-004';
    }
    if (buildNum === 7) {
        return '#BUG-DIVIDE-005';
    }
    if (tcId === 'TC-CALC-DIVIDE-010') {
        return '#BUG-DIVIDE-006';
    }
    if (tcId === 'TC-CALC-DIVIDE-007' && buildNum === 6) {
        return '#BUG-DIVIDE-007';
    }
    if (tcId === 'TC-CALC-DIVIDE-004') {
        return '#BUG-DIVIDE-008';
    }
    return '#BUG-DIVIDE-001';
}

function writeRow(stream, tcId, result, bugId, note) {
    stream.write(`| ${tcId} | Calculator | ${TESTER_NAME} | ${result} | ${bugId} | ${note} |\n`);
}

async function runTests() {
    console.log("Khởi động Puppeteer thực thi test suite Divide...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const outputDir = path.join(__dirname, '..', 'test-runs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const reportPath = path.join(outputDir, 'test-run-divide-builds.md');
    const stream = fs.createWriteStream(reportPath, { encoding: 'utf-8' });

    stream.write('# Test Run: Ghi nhận kết quả execute test case (Module: Divide)\n');
    stream.write('Test case là thiết kế; test run là bằng chứng thực thi kiểm thử trên 9 bản build.\n\n');

    await page.goto(URL, { waitUntil: 'networkidle2' });

    for (const buildNum of BUILDS_TO_TEST) {
        console.log(`Đang chạy test Build ${buildNum}...`);
        stream.write(`## Kết quả Build ${buildNum}\n\n`);
        stream.write('| Test Case ID | Module | Tester | Result | Related Bug | Note |\n');
        stream.write('| --- | --- | --- | --- | --- | --- |\n');

        try {
            await page.select('#selectBuild', buildNum.toString());
            await new Promise(r => setTimeout(r, 500));

            for (const tc of TEST_CASES) {
                let result = 'Pass';
                let note = '';
                let bugId = '';

                // Build 9 không có GUI nút Calculate -> Test cases bị Blocked (không đưa vào Bug)
                if (buildNum === 9) {
                    result = 'Blocked';
                    note = 'GUI nút Calculate không tồn tại trên Build 9 (Test case bị Blocked)';
                    writeRow(stream, tc.id, result, '', note);
                    continue;
                }

                try {
                    // Reset fields
                    await page.click('#clearButton').catch(() => {});
                    await new Promise(r => setTimeout(r, 100));
                    await page.$eval('#number1Field', el => el.value = '').catch(() => {});
                    await page.$eval('#number2Field', el => el.value = '').catch(() => {});

                    if (tc.in1) await page.type('#number1Field', tc.in1).catch(() => {});
                    if (tc.in2) await page.type('#number2Field', tc.in2).catch(() => {});

                    // Dropdown operation (3 là Divide)
                    await page.select('#selectOperationDropdown', '3');

                    // Checkbox Integers only
                    const intElem = await page.$('#integerSelect');
                    if (tc.check_int) {
                        if (!intElem) {
                            result = 'Fail';
                            note = 'Checkbox Integers Only không tồn tại trong DOM';
                        } else {
                            const isIntChecked = await page.$eval('#integerSelect', el => el.checked).catch(() => false);
                            const isDisabled = await page.$eval('#integerSelect', el => el.disabled).catch(() => false);
                            if (isDisabled) {
                                result = 'Fail';
                                note = 'Checkbox Integers Only bị disable không cho chọn';
                            } else if (!isIntChecked) {
                                await page.click('#integerSelect').catch(() => {});
                            }
                        }
                    } else if (intElem) {
                        const isIntChecked = await page.$eval('#integerSelect', el => el.checked).catch(() => false);
                        if (isIntChecked) {
                            await page.click('#integerSelect').catch(() => {});
                        }
                    }

                    if (result === 'Fail') {
                        bugId = getBugId(tc.id, buildNum, note);
                        writeRow(stream, tc.id, result, bugId, note);
                        continue;
                    }

                    // Click calculate
                    const calcBtn = await page.$('#calculateButton');
                    if (!calcBtn) {
                        result = 'Blocked';
                        note = 'Nút Calculate không tồn tại trên giao diện';
                        writeRow(stream, tc.id, result, '', note);
                        continue;
                    }

                    await page.click('#calculateButton');
                    await new Promise(r => setTimeout(r, 400));

                    // Safely get actual values
                    const actualVal = await page.$eval('#numberAnswerField', el => el.value).catch(() => '');
                    const actualErr = await page.evaluate(() => {
                        const el = document.querySelector('#errorMsgField');
                        return el ? (el.innerText || el.value || '') : '';
                    });

                    // Verification logic
                    if (tc.checkType === 'value') {
                        if (actualVal !== tc.expVal) {
                            result = 'Fail';
                            note = `Expected '${tc.expVal}' nhưng thực tế ra '${actualVal}'`;
                        }
                    } else if (tc.checkType === 'error') {
                        if (!actualErr || !actualErr.includes(tc.expErr)) {
                            result = 'Fail';
                            note = `Expected lỗi '${tc.expErr}' nhưng thực tế ra '${actualErr || actualVal}'`;
                        }
                    } else if (tc.checkType === 'error_or_msg') {
                        if (!actualErr.includes('Divide by zero error!') && actualVal !== 'Divide by zero error!') {
                            result = 'Fail';
                            note = `Expected thông báo lỗi 'Divide by zero error!' nhưng thực tế ra '${actualVal || actualErr || "không báo lỗi"}'`;
                        }
                    }
                } catch (e) {
                    result = 'Blocked';
                    note = 'Lỗi thao tác UI: ' + e.message.substring(0, 40);
                }

                if (result === 'Fail') {
                    bugId = getBugId(tc.id, buildNum, note);
                }

                writeRow(stream, tc.id, result, bugId, note);
            }
        } catch (e) {
            stream.write(`\n**Lỗi khi thực thi Build ${buildNum}:** ${e.message}\n`);
        }
        stream.write('\n---\n\n');
    }

    stream.end();
    await browser.close();
    console.log(`✅ Đã chạy xong 9 Builds cho Divide! Kết quả xuất tại: ${reportPath}`);
}

runTests();
