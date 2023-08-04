import BasketItem from '../BasketItem/BasketItem'
import Button from '../Button/Button'

import deliveryCar from '../../assets/icons/delivery-car.svg'

interface BasketProps {
  className?: string
}

const Basket = ({ className }: BasketProps) => {
  return (
    <article
      className={`rounded-2xl bg-white py-4 px-4 max-w-[300px] w-full ${className}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-bold">Корзина</h3>
        <span className="block text-center py-1 rounded-lg w-10 bg-bg ">4</span>
      </div>
	  {/*<span>Тут пока пусто :(</span>*/}
      <ul
        id="basket-list"
        className="pt-4 space-y-4 pr-2 border-silver border-t-2 mb-4 max-h-[285px] overflow-y-auto "
      >
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </ul>
      <div className="flex items-center justify-between text-base font-normal mb-6">
        <span>Итого</span>
        <span>1279₽</span>
      </div>
      <div className="mb-3">
        <Button variants="full" bgColor="secondary">
          Оформить заказ
        </Button>
      </div>
      <div className='space-x-2'>
        <img className='inline-block' src={deliveryCar} alt="Доставка" />
        <span className='align-middle'>Бесплатная доставка</span>
      </div>
    </article>
  )
}

export default Basket
