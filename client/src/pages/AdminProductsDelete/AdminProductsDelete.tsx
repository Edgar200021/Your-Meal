import AdminProductForm from '../../components/AdminProductForm/AdminProductForm'
import { IAction } from '../../models/react-router/methods'
import { ProductService } from '../../services/product'
import { useActionData } from 'react-router-dom'

const AdminProductsDelete = () => {
  const data = useActionData()

  console.log(data)
  return (
    <div>
      <AdminProductForm method="DELETE" action="/admin/products/delete" />
      {JSON.stringify(data)}
    </div>
  )
}

export async function AdminProductsDeleteAction({ request }: IAction) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const response = await ProductService.delete(data.id as string)

  return response
}

export default AdminProductsDelete
