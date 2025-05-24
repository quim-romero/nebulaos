import '@testing-library/jest-dom/vitest'
import { beforeEach, vi } from 'vitest'
import 'vitest-axe/extend-expect'

beforeEach(() => {
  document.documentElement.className = ''
  localStorage.clear()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string): MediaQueryList => {
    const mql = {
      matches: query.includes('dark'),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    } as unknown as MediaQueryList
    return mql
  },
})
