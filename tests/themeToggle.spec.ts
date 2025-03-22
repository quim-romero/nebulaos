import { test, expect } from '@playwright/test'

test.use({
  colorScheme: 'dark',
})

test('should toggle theme when clicking the button', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('theme', 'dark')
  })
  await page.goto('/')

  const html = page.locator('html')
  const toggleButton = page.getByRole('button', { name: /toggle theme/i })

  await expect(html).toHaveClass(/dark/)

  await toggleButton.click()
  await expect(html).toHaveClass(/light/)

  await toggleButton.click()
  await expect(html).toHaveClass(/dark/)
})
