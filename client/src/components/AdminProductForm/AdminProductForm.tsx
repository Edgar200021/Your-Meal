import { useFetcher } from 'react-router-dom'

import { FetchMethods } from '../../utils/fetcher'
import Button from '../Button/Button'

interface AdminProductFormProps {
  method: FetchMethods
  action?: string
}

const AdminProductForm = ({ method, action }: AdminProductFormProps) => {
  const fetcher = useFetcher()
  console.log(fetcher.state)

  const buttonText = method === 'POST' ? 'Create Products' : 'Update Product'

  if (method === 'DELETE') {
    return (
      <fetcher.Form className="flex gap-x-5" method={method} action={action}>
        <input
          type="number"
          placeholder="Product id"
          name="id"
          required
          className="py-3 px-2  rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        />
        <Button disabled={fetcher.state === 'submitting'} variants="standart">
          {fetcher.state === 'submitting' ? 'Loading...' : 'Delete Product'}
        </Button>
        <Button disabled={fetcher.state === 'submitting'} variants="standart">
          {fetcher.state === 'submitting'
            ? 'Loading...'
            : 'Delete All Products'}
        </Button>
      </fetcher.Form>
    )
  }
  return (
    <fetcher.Form
      className="grid grid-cols-2 gap-5"
      method={method}
      action={action}
    >
      {method === 'PUT' && (
        <input
          type="number"
          placeholder="Product id"
          name="id"
          required
          className="py-3 px-2  rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        />
      )}
      <input
        className="py-3 px-2  rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="text"
        name="title"
        placeholder="Product title"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-colors duration-300 ease "
        type="text"
        name="img"
        placeholder="Path to img"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="number"
        name="price"
        placeholder="Product price"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="text"
        name="description"
        placeholder="Product details"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="text"
        name="ingridients"
        placeholder="Product ingridients(Write with space)"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="number"
        name="weight"
        placeholder="Product weight"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        type="number"
        name="calory"
        placeholder="Product calory"
        autoComplete="off"
        required
      />
      <input
        className="py-3 px-2 rounded-md  focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease "
        autoComplete="off"
        type="text"
        name="category"
        placeholder="Product category"
        required
      />
      <Button disabled={fetcher.state === 'submitting'} variants="standart">
        {fetcher.state === 'submitting' ? 'Loading...' : buttonText}
      </Button>
    </fetcher.Form>
  )
}

export default AdminProductForm
