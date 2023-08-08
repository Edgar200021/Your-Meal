import Product from '../Product/Product'
import { IProduct } from '../../models/product/product'
import { ReactNode } from 'react'

interface ProductListProps {
  className?: string
  products: IProduct[]
  children?: ReactNode
}

const ProductList = ({ className, products, children }: ProductListProps) => {
  return (
    <div className={`self-start  ${className}`}>
		{children}
      <ul className="grid grid-cols-responsive-md  gap-7">
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </ul>
    </div>
  )
}

export default ProductList
