import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type ButtonTypes = 'standart' | 'full' | 'mini'
type ButtonBg = 'primary' | 'secondary' | 'bg'
type ButtonVariants = Record<ButtonTypes, string>

interface ButtonProps extends React.ComponentProps<'button'> {
  bgColor?: ButtonBg
  variants: ButtonTypes
  children: ReactNode
  to?: string
}

const Button = ({
  to,
  children,
  variants,
  bgColor = 'primary',
  ...otherProps
}: ButtonProps) => {
  const standart: string = `inline-block py-3 px-8 ${
    bgColor === 'bg' ? 'text-black' : 'text-white'
  }  ${
    bgColor === 'primary'
      ? 'bg-primary'
      : bgColor === 'secondary'
      ? 'bg-secondary'
      : 'bg-bg'
  } rounded-full hover:-translate-y-[6px] transition-transform duration-300 ease active:-translate-y-1 aria-[current=page]:scale-125 disabled:cursor-not-allowed  `

  const mini: string =
    'inline-block py-2 px-3 text-black bg-white rounded-full hover:-translate-y-[6px] hover:bg-primary transition-all duration-300 ease active:-translate-y-1 aria-[current=page]:scale-125 aria-[current=page]:bg-primary disabled:cursor-not-allowed inline-flex items-center gap-x-2  '

  const buttonVariants: ButtonVariants = {
    standart,
    full: standart + ' w-full',
    mini,
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
