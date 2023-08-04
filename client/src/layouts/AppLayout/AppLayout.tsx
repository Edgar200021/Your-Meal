import { Outlet } from 'react-router-dom'
import Basket from '../../components/Basket/Basket'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

const AppLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
	  <main className='pt-14 pb-24 grid grid-cols-main-layout'>
		<Basket className='col-basket mt-[80px] mr-12'/>
		<Outlet/>
	  </main>
    </>
  )
}

export default AppLayout
