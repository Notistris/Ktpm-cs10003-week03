const { test } = require('@playwright/test');

/**
 * Ánh xạ input người dùng hoặc biến môi trường hoặc Playwright project sang giá trị dropdown #selectBuild
 * @param {string|number|undefined} [buildInput]
 * @returns {string}
 */
function getBuildOption(buildInput) {
  let input = buildInput;
  if (input === undefined) {
    try {
      const testInfo = test.info();
      if (testInfo?.project?.metadata?.build !== undefined) {
        input = testInfo.project.metadata.build;
      } else if (testInfo?.project?.name) {
        const name = testInfo.project.name.toLowerCase();
        if (name === 'prototype') input = '0';
        else if (name.startsWith('build-')) input = name.replace('build-', '');
      }
    } catch {
      // Bỏ qua nếu gọi ngoài context test runner
    }
  }

  if (input === undefined) {
    input = process.env.BUILD || '0';
  }

  const str = input.toString().toLowerCase().trim();

  const buildMap = {
    'prototype': '0',
    'proto': '0',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
  };

  return buildMap[str] || '0';
}

/**
 * Chọn Build phiên bản trên trang Basic Calculator
 * @param {import('@playwright/test').Page} page
 * @param {string|number} [build]
 */
async function selectBuild(page, build) {
  const optionValue = getBuildOption(build);
  await page.selectOption('#selectBuild', optionValue);
}

module.exports = {
  getBuildOption,
  selectBuild,
};
