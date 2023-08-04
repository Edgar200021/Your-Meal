import AdminControlCard from '../../components/AdminControlCard/AdminControlCard'
import AdminCredit from '../../components/AdminCredit/AdminCredit'
import AdminEarnings from '../../components/AdminEarnings/AdminEarnings'
import AdminProgressInfo from '../../components/AdminProgressInfo/AdminProgressInfo'

import icon from '../../assets/icons/admin/Icon.svg'
import user from '../../assets/icons/admin/user.svg'
import miniChart from '../../assets/icons/admin/mini-black-chart.svg'
import basket from '../../assets/icons/admin/basket.svg'

const AdminMain = () => {
  return (
    <div className="col-admin-content">
      <div className="mb-10">
        <span className="block font-extrabold text-sm">Hi Andrei,</span>
        <h2 className="font-extrabold text-4xl">Welcome to YourMeal</h2>
      </div>

      <div className="grid grid-cols-responsive-sm gap-5 mb-5 ">
        <AdminProgressInfo
          img={icon}
          title="All spendings"
          description="682.5$"
        />
        <AdminProgressInfo img={user} title="New users" description="321" />
        <AdminProgressInfo
          img={miniChart}
          title="Earnings"
          description="350.40$"
        />
        <AdminProgressInfo img={basket} title="All Products" description="30" />
      </div>

      <div className="grid grid-cols-responsive-md gap-5 grid-rows-admin-main-content">
        <AdminCredit className="col-span-2" />
        <AdminControlCard />
        <AdminEarnings />
      </div>
    </div>
  )
}

export default AdminMain
