import Button from '../../components/Button/Button'
import { Outlet, useNavigation } from 'react-router-dom'

const AdminProducts = () => {
  const { state } = useNavigation()

  console.log(state)
  return (
    <div className="col-admin-content">
      <div className="flex flex-wrap gap-10 items-start mb-20">
        <Button to="/admin/products" variants="standart">
          Products
        </Button>
        <Button to="/admin/products/add" variants="standart">
          Add product
        </Button>
        <Button to="/admin/products/update" variants="standart">
          Update product
        </Button>
        <Button to="/admin/products/delete" variants="standart">
          Delete product
        </Button>
      </div>
      <Outlet />
   
    </div>
  )
}

export default AdminProducts
