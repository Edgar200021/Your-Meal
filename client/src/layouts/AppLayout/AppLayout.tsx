import { Outlet, useLoaderData, useNavigation } from 'react-router-dom'
import Basket from '../../components/Basket/Basket'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ProductList from '../../components/ProductList/ProductList'
import { ProductService } from '../../services/product'
import { IProduct } from '../../models/product/product'
import PageSpinner from '../../components/PageSpinner/PageSpinner'
import { useCallback, useMemo, useState } from 'react'
import { Category } from '../../enums/cateogory'

const AppLayout = () => {
  const { state } = useNavigation()
  const [category, setCategory] = useState<Category>(Category.BURGER)
  const [title, setTitle] = useState('Бургер')

  const products = useLoaderData() as IProduct[]

  const toggleCategoryAndText = useCallback(
    (category: Category, title: string) => {
      setCategory(category)
      setTitle(title)
    },
    []
  )

  console.log(state)

  const filteredByCategoryProducts = useMemo(() => {
    return products.filter(product => product.category === category)
  }, [category, products])

  return (
    <>
      <Header />
      <NavBar onCategory={toggleCategoryAndText} />
      <main className="pt-14 pb-24 grid grid-cols-main-layout justify-between gap-10">
        <Basket className="col-basket mt-20 mr-12 self-start" />
        <ProductList
          products={filteredByCategoryProducts}
          className="col-main-content"
        >
          <h2 className="font-bold text-4xl mb-9">{title}</h2>
        </ProductList>
        <Outlet />
      </main>

      {state === 'loading' && <PageSpinner />}
    </>
  )
}

export async function AppLayoutLoader() {
  try {
    const products: IProduct[] = await ProductService.get()
    return products
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export default AppLayout
