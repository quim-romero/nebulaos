import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('Home has no obvious a11y issues (wcag2a/aa)', async ({ page }) => {
  await page.goto('/')

  await page.waitForLoadState('networkidle')
  await page.waitForFunction(() => {
    const h1 = document.querySelector('h1')
    return !!h1 && getComputedStyle(h1).opacity === '1'
  })

  await page.waitForFunction(() => {
    const h1 = document.querySelector('h1')
    if (!h1) return false
    const t = getComputedStyle(h1).transform
    return t === 'none' || t === 'matrix(1, 0, 0, 1, 0, 0)'
  })

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .disableRules(['color-contrast'])
    .analyze()

  expect(results.violations).toEqual([])
})
