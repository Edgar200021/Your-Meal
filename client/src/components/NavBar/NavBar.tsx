import { navbar } from '../../constants/navbar'
import { Category } from '../../enums/cateogory'
import { MouseEvent } from 'react'
import { memo } from 'react'

interface NavBarProps {
  onCategory: (category: Category, title: string) => void
}

import Button from '../Button/Button'
const NavBar = memo(({ onCategory }: NavBarProps) => {
  return (
    <nav>
      <ul
        id="navbar"
        className=" pt-12 px-8 pb-2 flex gap-x-5 justify-center tablet:justify-start overflow-x-auto overflow-y-visible scrollbar-thin  scrollbar-thumb-[#ffab08]  scrollbar-track-slate-800 phone:px-2 snap-x  "
      >
        {navbar.map(({ value, text }) => {
          return (
            <li className="min-w-[fit-content] snap-center" key={value}>
              <Button
                onClick={() => {
                  onCategory(value, text)
                }}
                value={value}
                variants="mini"
              >
                <img
                  src={`../../../public/icons/navbar/${value}.svg`}
                  alt={text}
                />
                {text}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
})

export default NavBar
