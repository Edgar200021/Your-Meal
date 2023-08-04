import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type ButtonTypes = 'standart' | 'full'
type ButtonVariants = Record<string, string>

interface ButtonProps extends React.ComponentProps<'button'> {
  variants: ButtonTypes
  children: ReactNode
  to?: string
}

const standart: string =
  'inline-block py-3 px-8 text-white bg-primary rounded-full hover:-translate-y-[6px] transition-transform duration-300 ease active:-translate-y-1 aria-[current=page]:scale-125 disabled:cursor-not-allowed '

const Button = ({ to, children, variants, ...otherProps }: ButtonProps) => {
  const buttonVariants: ButtonVariants = {
    standart,
    full: standart + ' w-full',
  }

  if (to) {
    return (
      <NavLink className={buttonVariants[variants]} to={to}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={buttonVariants[variants]} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
