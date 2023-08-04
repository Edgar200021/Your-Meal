import { NavLink } from 'react-router-dom'

import basket from '../../assets/icons/sidebar/basket.svg'
import home from '../../assets/icons/sidebar/home.svg'
import message from '../../assets/icons/sidebar/message.svg'
import settings from '../../assets/icons/sidebar/settings.svg'
import user from '../../assets/icons/sidebar/user.svg'
import logout from '../../assets/icons/sidebar/logout.svg'

interface AdminSidebarProps {
  className?: string
}

const AdminSidebar = ({ className }: AdminSidebarProps) => {
  return (
    <div
      className={`rounded-3xl bg-black py-6 px-4 ${className} self-start sticky top-0 min-w-[60px]`}
    >
      <ul className="flex flex-col items-center justify-center gap-y-10 h-full">
        <li>
          <NavLink
            to="/admin"
            className="block hover:scale-125 transition-transform ease duration-300 aria-[current=page]:scale-125"
          >
            <img src={home} alt="Главная" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/products"
            className="active:scale-125 block hover:scale-125 transition-transform ease duration-300 aria-[current=page]:scale-125"
          >
            <img className='w-[30px] h-[30px]' src={basket} alt="Товары" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className="active:scale-125 block hover:scale-125 transition-transform ease duration-300 aria-[current=page]:scale-125"
          >
            <img src={user} alt="Пользователи" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="active:scale-125 block hover:scale-125 transition-transform ease duration-300 aria-[current=page]:scale-125"
          >
            <img src={message} alt="Сообщение" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="active:scale-125 block hover:scale-125 transition-transform ease duration-300 aria-[current=page]:scale-125"
          >
            <img src={settings} alt="Настройки" />
          </NavLink>
        </li>
        <li className="mt-auto ">
          <NavLink
            to="/"
            className="active:scale-125 block hover:scale-125 transition-transform ease duration-300"
          >
            <img src={logout} alt="Выход" />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AdminSidebar
