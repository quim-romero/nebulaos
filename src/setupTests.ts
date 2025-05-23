import '@testing-library/jest-dom'
import { beforeEach, vi, expect } from 'vitest'
import { toHaveNoViolations } from 'vitest-axe'

beforeEach(() => {
  document.documentElement.className = ''
  localStorage.clear()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query.includes('dark'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})

expect.extend(toHaveNoViolations)
