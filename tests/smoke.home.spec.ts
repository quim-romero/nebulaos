import { test, expect } from '@playwright/test'

test.describe('Smoke - Home', () => {
  test('loads without console errors and shows key UI', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })

    await page.goto('/')

    await expect(page).toHaveTitle(/NebulaOS/i)

    const hero = page.getByRole('heading', {
      name: /More than productivity\.?\s*Absolute control\.?/i,
      level: 1,
    })
    await expect(hero).toBeVisible()

    const toggle = page.getByRole('button', { name: /toggle theme/i })
    await expect(toggle).toBeVisible()

    expect(errors, `Console errors: ${errors.join('\n')}`).toHaveLength(0)
  })
})
