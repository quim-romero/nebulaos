import { defineConfig } from '@playwright/test'

const isCI = !!process.env.CI
const port = Number(process.env.PORT || 4173)
const baseURL = process.env.BASE_URL || `http://localhost:${port}`

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  webServer: isCI
    ? {
        command: `npm run preview -- --port=${port} --strictPort`,
        port,
        timeout: 20_000,
        reuseExistingServer: false,
      }
    : {
        command: 'npm run dev',
        port: 5173,
        timeout: 10_000,
        reuseExistingServer: !process.env.CI,
      },
})
