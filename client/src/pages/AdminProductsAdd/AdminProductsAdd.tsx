import { useFetcher } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Params } from 'react-router-dom'
import { ProductService } from '../../services/product'
import { IProduct } from '../../models/product/product'
import AdminProductForm from '../../components/AdminProductForm/AdminProductForm'
import { IAction } from '../../models/react-router/methods'

const AdminProductsAdd = () => {
  return (
    <div>
      <AdminProductForm method="POST" action="/admin/products/add" />
    </div>
  )
}

export async function AdminProductsAddAction({ request }: IAction) {
  const formData: FormData = await request.formData()
  const data: IProduct = Object.fromEntries(formData) as unknown as IProduct

  if (!Object.values(data).length) return { error: 'All fields are required' }

  const product = await ProductService.create({
    ...data,
    ingridients: data.ingridients.split(' '),
  })

  return product
}

export default AdminProductsAdd
