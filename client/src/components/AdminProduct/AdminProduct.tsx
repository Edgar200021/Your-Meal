import { memo } from 'react'

interface AdminProductProps {
  id?: string
  title: string
  img: string
  price: number
  ingredients?: string[]
  description: string
  weight: number
  category?: string
  calory?: number
  collapse: boolean
  onCollapse: () => void
}

const AdminProduct = memo(
  ({
    title,
    img,
    price,
    ingredients,
    description,
    weight,
    collapse,
    onCollapse,
  }: AdminProductProps) => {
    return (
      <li className="rounded-2xl bg-white py-2 px-4">
        <div className=" flex items-center gap-x-5">
          <img
            className="block w-28 h-28 object-contain"
            src={img}
            alt={title}
          />
          <div className="space-y-2">
            <span className="block font-regular text-sm">{title}</span>
            <span className="blockfont-regular text-sm text-[#B1B1B1]">
              {weight}г
            </span>
            <span className="block">{price}₽</span>
          </div>
          <button
            onClick={onCollapse}
            className="block ml-auto text-3xl transition-all duration-300 ease"
          >
            {collapse ? '-' : '+'}
          </button>
        </div>
        <div
          className={`grid ${
            collapse ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          } overflow-hidden transition-[grid-template-rows]`}
        >
          <div className="min-h-0">
            <p className="max-w-[400px] text-2xl mb-5">{description}</p>
            <span className="block">Состав:</span>
            <ul>
              {ingredients?.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    )
  }
)

export default AdminProduct
