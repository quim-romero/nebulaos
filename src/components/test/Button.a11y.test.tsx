import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Button from '../Button'

describe('Button a11y', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
