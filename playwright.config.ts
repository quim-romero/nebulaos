import { defineConfig, devices } from '@playwright/test'

const isCI = !!process.env.CI
const devPort = 5173
const previewPort = Number(process.env.PORT || 4173)
const baseURL =
  process.env.BASE_URL || `http://localhost:${isCI ? previewPort : devPort}`

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  reporter: isCI ? 'github' : [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL,
    headless: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
  },

  webServer: isCI
    ? {
        command: `npm run preview -- --port=${previewPort} --strictPort`,
        url: `http://localhost:${previewPort}`,
        timeout: 120_000,
        reuseExistingServer: false,
      }
    : {
        command: 'npm run dev',
        url: `http://localhost:${devPort}`,
        timeout: 120_000,
        reuseExistingServer: true,
      },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
