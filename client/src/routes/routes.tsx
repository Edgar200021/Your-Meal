import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import AdminMain from '../pages/AdminMain/AdminMain'
import AdminProductsConfig from '../pages/AdminProductsConfig/AdminProductsConfig'
import AdminProducts, {
  AdminProductsLoader,
} from '../pages/AdminProducts/AdminProducts'
import AdminProductsAdd, {
  AdminProductsAddAction,
} from '../pages/AdminProductsAdd/AdminProductsAdd'
import AdminProductsUpdate, {
  AdminProductsUpdateAction,
} from '../pages/AdminProductsUpdate/AdminProductsUpdate'
import AdminProductsDelete, {
  AdminProductsDeleteAction,
} from '../pages/AdminProductsDelete/AdminProductsDelete'
import AppLayout, { AppLayoutLoader } from '../layouts/AppLayout/AppLayout'
import ProductPage, {
  ProductPageLoader,
} from '../pages/ProductPage/ProductPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
    loader: AppLayoutLoader,
    children: [
      {
        path: '/products/:id',
        element: <ProductPage />,
        loader: ProductPageLoader,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <AdminMain />,
      },
      {
        element: <AdminProductsConfig />,
        children: [
          {
            path: '/admin/products',
            element: <AdminProducts />,
            loader: AdminProductsLoader,
          },
          {
            path: '/admin/products/add',
            element: <AdminProductsAdd />,
            action: AdminProductsAddAction,
          },
          {
            path: '/admin/products/update',
            element: <AdminProductsUpdate />,
            action: AdminProductsUpdateAction,
          },
          {
            path: '/admin/products/delete',
            element: <AdminProductsDelete />,
            action: AdminProductsDeleteAction,
          },
        ],
      },
    ],
  },
])
