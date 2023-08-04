import React from 'react'
import AdminProductForm from '../../components/AdminProductForm/AdminProductForm'
import { IAction } from '../../models/react-router/methods'
import { ProductService } from '../../services/product'
import { IProduct } from '../../models/product/product'

const AdminProductsUpdate = () => {
  return (
    <div>
      <AdminProductForm method="PUT" action="/admin/products/update" />
    </div>
  )
}

export async function AdminProductsUpdateAction({ request }: IAction) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as IProduct

  if (!Object.values(data).length) return { error: 'All fields are required' }

  const product = await ProductService.update({
    ...data,
    ingridients: data.ingridients.split(' '),
  })

  return product
}

export default AdminProductsUpdate
