import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('Home has no obvious a11y issues (wcag2a/aa)', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze()

  if (results.violations.length) {
    console.log(JSON.stringify(results.violations, null, 2))
  }

  expect(results.violations).toEqual([])
})
