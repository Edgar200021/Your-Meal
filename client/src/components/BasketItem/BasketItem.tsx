import { BasketProduct, toggleCount } from '../../store/basketSlice/basketSlice'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'

interface BasketItemProps extends BasketProduct {}

const BasketItem = ({
  id,
  title,
  img,
  price,
  weight,
  count,
}: BasketItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <li className="flex items-center gap-x-[6px] pb-4 border-silver border-b-2">
      <img className="w-16 object-contain rounded-lg" src={img} alt="" />
      <div>
        <span className="block font-normal text-xs ">{title}</span>
        <span className="block font-normal text-xs text-[#B1B1B1] mb-[6px]">
          {weight}г
        </span>
        <span className="blockfont-normal text-xs"> {price}₽</span>
      </div>
      <div className="ml-auto px-3 py-2 bg-bg rounded-xl inline-flex items-center justify-center gap-4">
        <button
          onClick={() => {
            dispatch(toggleCount({ id, action: 'decrement' }))
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(toggleCount({ id, action: 'increment' }))
          }}
        >
          +
        </button>
      </div>
    </li>
  )
}

export default BasketItem
