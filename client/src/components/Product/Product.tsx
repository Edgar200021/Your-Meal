import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../models/product/product'
import { addProduct } from '../../store/basketSlice/basketSlice'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'
import Button from '../Button/Button'

interface ProductProps {
  id: IProduct['id']
  img: string
  price: number
  title: string
  weight: number
}

const Product = ({ id, img, price, title, weight }: ProductProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function addToBasket() {
    dispatch(
      addProduct({
        id,
        img,
        price,
        title,
        weight,
        count: 1,
      })
    )
  }

  return (
    <li className="p-3 max-w-[400px] bg-white rounded-xl">
      <img
        src={img}
        alt={title}
        className="w-full max-h-[220px] min-h-[200px] object-cover mb-4 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 "
		onClick={() => navigate(`./products/${id}`)}
      />
      <span className="block mb-2 font-bold text-2xl">{price}₽</span>
      <span className="block mb-7  text-base font-normal ">{title}</span>
      <span className="block mb-2 font-bold text-base text-[#B1B1B1]">
        {weight}г
      </span>
      <div>
        <Button variants="full" bgColor="bg" onClick={addToBasket}>
          Добавить
        </Button>
      </div>
    </li>
  )
}

export default Product
