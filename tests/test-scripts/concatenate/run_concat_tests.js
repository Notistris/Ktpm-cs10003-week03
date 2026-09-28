const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';
const BUILDS_TO_TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TESTER_NAME = 'Hoa';

const TEST_CASES = [
    { id: 'TC-CALC-CONCAT-001', in1: 'Hello', in2: 'World', exp: 'HelloWorld', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-002', in1: '123', in2: '456', exp: '123456', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-003', in1: 'Item_', in2: '99', exp: 'Item_99', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-004', in1: '!@#$%^', in2: '&*()_+', exp: '!@#$%^&*()_+', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-005', in1: 'Good ', in2: 'Morning', exp: 'Good Morning', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-006', in1: '', in2: 'TestData', exp: 'TestData', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-007', in1: 'TestData', in2: '', exp: 'TestData', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-008', in1: '', in2: '', exp: '', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-009', in1: '', in2: '', exp: '', check_int: false, validate_disabled: true },
    { id: 'TC-CALC-CONCAT-010', in1: '5.5', in2: '6.5', exp: '5.56.5', check_int: true, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-011', in1: '3.14', in2: '0.001', exp: '3.140.001', check_int: false, validate_disabled: false },
    { id: 'TC-CALC-CONCAT-012', in1: '<script>alert(1)</script>', in2: 'Text', exp: '<script>alert(1)</script>Text', check_int: false, validate_disabled: false }
];

function writeRow(stream, tcId, result, note) {
    const bug = (result === 'Fail' || result === 'Blocked') ? '#TBD' : '';
    stream.write(`| ${tcId} | Calculator | ${TESTER_NAME} | ${result} | ${bug} | ${note} |\n`);
}

async function runTests() {
    console.log("Khởi động Puppeteer...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Bắt sự kiện có alert (ví dụ khi có lỗi XSS injection)
    let alertAppeared = false;
    page.on('dialog', async dialog => {
        alertAppeared = true;
        await dialog.accept();
    });

    const outputDir = path.join(__dirname, '..', 'test-runs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const reportPath = path.join(outputDir, 'test-run-concat-builds.md');
    const stream = fs.createWriteStream(reportPath, { encoding: 'utf-8' });

    stream.write('# Test Run: Ghi nhận kết quả execute test case\n');
    stream.write('Test case là thiết kế; test run là bằng chứng đã chạy.\n\n');

    console.log("Truy cập trang web...");
    await page.goto(URL, { waitUntil: 'networkidle2' });

    for (const buildNum of BUILDS_TO_TEST) {
        console.log(`Đang chạy test cho Build ${buildNum}...`);
        stream.write(`## Kết quả Build ${buildNum}\n\n`);
        stream.write('| Test Case ID | Module | Tester | Result | Related Bug | Note |\n');
        stream.write('| --- | --- | --- | --- | --- | --- |\n');

        try {
            await page.select('#selectBuild', buildNum.toString());
            await new Promise(r => setTimeout(r, 1000)); // Chờ load build mới

            for (const tc of TEST_CASES) {
                let result = 'Pass';
                let note = '';
                alertAppeared = false; // Reset trạng thái trước mỗi test case

                try {
                    // Nhấn clear
                    await page.click('#clearButton');
                    await new Promise(r => setTimeout(r, 200));

                    // Reset field value triệt để (đề phòng nút clear lỗi)
                    await page.$eval('#number1Field', el => el.value = '');
                    await page.$eval('#number2Field', el => el.value = '');

                    // Nhập Input
                    if (tc.in1) await page.type('#number1Field', tc.in1);
                    if (tc.in2) await page.type('#number2Field', tc.in2);

                    // Chọn dropdown (4 là Concatenate)
                    await page.select('#selectOperationDropdown', '4');

                    // TC-009: Kiểm tra checkbox có bị disable không
                    if (tc.validate_disabled) {
                        const isDisabled = await page.$eval('#integerSelect', el => el.disabled);
                        if (!isDisabled) {
                            result = 'Fail';
                            note = 'Checkbox Integer không bị disable khi chọn Concatenate';
                        }
                        writeRow(stream, tc.id, result, note);
                        continue;
                    }

                    // Xử lý Checkbox Integer (TC-010)
                    const isIntChecked = await page.$eval('#integerSelect', el => el.checked);
                    if (tc.check_int && !isIntChecked) {
                        await page.click('#integerSelect');
                    } else if (!tc.check_int && isIntChecked) {
                        await page.click('#integerSelect');
                    }

                    // Bấm tính toán
                    await page.click('#calculateButton');
                    await new Promise(r => setTimeout(r, 500));

                    // Nếu có Alert thì báo lỗi bảo mật ngay
                    if (alertAppeared) {
                        result = 'Fail';
                        note = 'Lỗi bảo mật (XSS Alert xuất hiện)';
                    } else {
                        // So sánh kết quả
                        const actualVal = await page.$eval('#numberAnswerField', el => el.value);
                        if (actualVal !== tc.exp) {
                            result = 'Fail';
                            note = `Expected '${tc.exp}' nhưng ra '${actualVal}'`;
                        }
                    }
                } catch (e) {
                    result = 'Blocked';
                    note = 'Lỗi thao tác UI: ' + e.message.substring(0, 30);
                }

                writeRow(stream, tc.id, result, note);
            }
        } catch (e) {
            stream.write(`\n**Lỗi khi chạy Build ${buildNum}:** ${e.message}\n`);
        }
        stream.write('\n---\n\n');
    }

    stream.end();
    await browser.close();
    console.log(`✅ Đã chạy xong 9 Builds! Kết quả được xuất tại: ${reportPath}`);
}

runTests();
