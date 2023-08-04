import { useState } from 'react'
import { ProductService } from '../../services/product'
import { useLoaderData } from 'react-router-dom'
import AdminProduct from '../../components/AdminProduct/AdminProduct'
import { IProduct } from '../../models/product/product'

const AdminProducts = () => {
  const [collapse, setCollapse] = useState<number | null>(0)
  const data = useLoaderData() as IProduct[]

  function handleCollapse(index: number) {
    setCollapse(prev => (prev === index ? null : index))
  }

  return (
    <ul className="space-y-5 max-w-[900px] max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF7020]  scrollbar-track-slate-800 ">
      {data.map((product, i) => (
        <AdminProduct
          key={product.id}
          {...product}
          collapse={i === collapse}
          onCollapse={() => handleCollapse(i)}
        />
      ))}
    </ul>
  )
}

export async function AdminProductsLoader() {
  const data = await ProductService.get()
  return data
}

export default AdminProducts
