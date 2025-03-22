import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('applies the correct variant class', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button.className).toContain('bg-secondary')
  })

  it('forwards additional props', () => {
    render(<Button data-testid="my-button">Click</Button>)
    const button = screen.getByTestId('my-button')
    expect(button).toBeInTheDocument()
  })
})
