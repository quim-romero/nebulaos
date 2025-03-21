import clsx from 'clsx'
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300'
    const variants: Record<Variant, string> = {
      primary: 'bg-primary text-dark hover:bg-secondary',
      secondary: 'bg-secondary text-dark hover:bg-primary',
      outline: 'border border-light text-light hover:bg-light hover:text-dark',
    }

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
