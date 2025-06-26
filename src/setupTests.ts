import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
afterEach(() => cleanup())

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

if (!('ResizeObserver' in globalThis)) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

if (!('IntersectionObserver' in globalThis)) {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
    root = null
    rootMargin = ''
    thresholds = []
  }
}

if (!window.scrollTo) {
  window.scrollTo = vi.fn()
}

if (!HTMLCanvasElement.prototype.getContext) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    value: vi.fn(() => ({
      measureText: () => ({ width: 0 }),
      getImageData: () => ({ data: new Uint8ClampedArray(4) }),
      putImageData: () => {},
      drawImage: () => {},
      fillRect: () => {},
      clearRect: () => {},
      beginPath: () => {},
      closePath: () => {},
      stroke: () => {},
      fillText: () => {},
      save: () => {},
      restore: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
    })),
  })
}
