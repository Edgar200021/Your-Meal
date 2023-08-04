import { navbar } from '../../constants/navbar'
import Button from '../Button/Button'
const NavBar = () => {
  return (
    <nav >
      <ul className=" pt-12 px-8 flex gap-x-5 justify-center tablet:justify-start overflow-x-auto overflow-y-visible scrollbar-thin  scrollbar-thumb-[#FF7020]  scrollbar-track-slate-800 phone:px-2  ">
        {navbar.map(({ value, text }) => {
          return (
            <li className="min-w-[fit-content]" key={value}>
              <Button to='value' value={value} variants="mini">
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
}

export default NavBar
