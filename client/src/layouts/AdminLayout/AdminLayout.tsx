import { Outlet, useNavigation } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import PageSpinner from '../../components/PageSpinner/PageSpinner'

const AdminLayout = () => {
	const {state} = useNavigation()

	console.log(state)

  return (
    <div className=" grid grid-cols-admin-layout min-h-[100dvh] py-20 bg-[#F4F7FE] justify-between gap-x-20 ">
      <AdminSidebar className="col-admin-sidebar" />
      <Outlet />
	  {state === 'loading' && <PageSpinner/>}
    </div>
  )
}

export default AdminLayout
