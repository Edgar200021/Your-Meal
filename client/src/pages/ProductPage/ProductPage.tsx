import { Params, useLoaderData } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import { ProductService } from '../../services/product'
import { IProduct } from '../../models/product/product'
import { useEffect } from 'react'

const ProductPage = () => {
  const product = useLoaderData() as IProduct

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return (): void => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div>
      <Modal>
        <SingleProduct {...product} />
      </Modal>
    </div>
  )
}

export async function ProductPageLoader({
  request,
  params,
}: {
  request: Request
  params: Params
}) {
  const { id } = params

  try {
    const product = await ProductService.getOne(Number(id))
    return product
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message)
  }
}

export default ProductPage
