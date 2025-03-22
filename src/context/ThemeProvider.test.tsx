import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeProvider from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

describe('ThemeProvider', () => {
  it('toggles between light and dark themes', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i })

    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(toggleButton)
    expect(document.documentElement.classList.contains('light')).toBe(true)

    fireEvent.click(toggleButton)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
