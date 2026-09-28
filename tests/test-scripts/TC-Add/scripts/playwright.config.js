// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Đọc cấu hình build từ biến môi trường BUILD (mặc định là '0' - Prototype)
 */
const defaultBuild = process.env.BUILD || '0';

module.exports = defineConfig({
  testDir: '../specs',
  testMatch: process.env.TEST_MATCH || '**/*.spec.js',
  timeout: 20 * 1000,
  expect: {
    timeout: 3000,
  },
  workers: 4,
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://testsheepnz.github.io',
    headless: true,
    actionTimeout: 3000,
    navigationTimeout: 30000,
    trace: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'prototype',
      use: {
        ...devices['Desktop Chrome'],
      },
      metadata: { build: '0' },
    },
    {
      name: 'build-0',
      use: {
        ...devices['Desktop Chrome'],
      },
      metadata: { build: '0' },
    },
    {
      name: 'build-1',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '1' },
    },
    {
      name: 'build-2',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '2' },
    },
    {
      name: 'build-3',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '3' },
    },
    {
      name: 'build-4',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '4' },
    },
    {
      name: 'build-5',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '5' },
    },
    {
      name: 'build-6',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '6' },
    },
    {
      name: 'build-7',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '7' },
    },
    {
      name: 'build-8',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '8' },
    },
    {
      name: 'build-9',
      use: { ...devices['Desktop Chrome'] },
      metadata: { build: '9' },
    },
  ],
});
