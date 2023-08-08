import { useState } from 'react'
import { IProduct } from '../../models/product/product'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'
import Button from '../Button/Button'
import { addProduct } from '../../store/basketSlice/basketSlice'

interface SingleProductProps extends IProduct {}

const SingleProduct = ({
  id,
  img,
  title,
  description,
  ingredients,
  price,
  calory,
  weight,
}: SingleProductProps) => {
  const dispatch = useAppDispatch()

  const [count, setCount] = useState(1)

  function toggleCount(action: 'increment' | 'decrement') {
    switch (action) {
      case 'increment':
        setCount(prev => prev + 1)
        break
      case 'decrement':
        setCount(prev => (prev > 1 ? prev - 1 : prev))
        break
    }
  }

  return (
    <div className="px-6 pt-6 pb-4">
      <h2 className="mb-6 text-4xl font-bold col-span-full ">{title}</h2>
      <div className=" grid grid-cols-single-product gap-x-4 gap-y-10 items-center">
        <img
          src={img}
          className=" max-w-[276px] w-full min-h-[220px] object-cover"
          alt=""
        />
        <div>
          <p className="text-base font-normal mb-1">{description}</p>
          <span className="block mb-1">Состав:</span>
          <ul className="text-xs mb-1">
            {ingredients?.map(ingridient => (
              <li key={ingridient}>{ingridient}</li>
            ))}
          </ul>
          <div className="text-xs text-[#B1B1B1]">
            <span>{weight}г,</span>
            <span> {calory} 430</span>
          </div>
        </div>
        <div>
          <Button
            variants="full"
            bgColor="secondary"
            onClick={() =>
              dispatch(
                addProduct({
                  id,
                  img,
                  title,
                  price,
                  weight,
                  count,
                })
              )
            }
          >
            Добавить
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-20 py-2 rounded-lg bg-bg flex items-center justify-center gap-x-4">
            <button onClick={() => toggleCount('decrement')}>-</button>
            <span>{count}</span>
            <button onClick={() => toggleCount('increment')}>+</button>
          </div>
          <span className="">{price}р</span>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct
