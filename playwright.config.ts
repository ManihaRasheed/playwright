import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000,
  use: {
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php',
    headless: true,
    screenshot: 'only-on-failure', // Capture screenshots on failure
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
};







