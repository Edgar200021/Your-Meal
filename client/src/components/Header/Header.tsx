import logo from '../../assets/icons/logo-white.svg'
import burger from '../../assets/icons/burger.svg'

const Header = () => {
  return (
    <header
      id="header"
      className="h-screen min-h-[300px] w-full bg-no-repeat bg-[length:3000px_3000px]  bg-[center_bottom_0px] 
	tablet:bg-[length:2000px_2000px] phone:bg-[length:1200px_1100px]  "
    >
      <div className="max-w-[1100px] mx-auto py-5 px-4">
        <img src={logo} alt="YourMeal" className="block mx-auto w-40 mb-12" />
        <div className="flex items-center flex-wrap justify-center  gap-9 phone:flex-col-reverse">
          <img
            src={burger}
            alt="Burger"
            className="block max-w-sm w-full  miniTablet:max-w-[250px] miniPhone:max-w-[150px]"
          />
          <div className=" phone:text-center">
            <h1 className="font-extrabold text-7xl mb-12 miniTablet:text-4xl miniPhone:text-3xl">
              <span className="block text-white">Только самые </span>
              <span className="block text-secondary">сочные бургеры!</span>
            </h1>
            <span className="font-bold text-base text-white">
              Бесплатная доставка от 599₽
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
