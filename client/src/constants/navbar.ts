import { Category } from '../enums/cateogory'

interface Navbar {
  value: Category
  text: string
}

export const navbar: Navbar[] = [
  { value: Category.BURGER, text: 'Бургер' },
  { value: Category.SNACK, text: 'Закуски' },
  { value: Category.HOTDOG, text: 'Хот-Доги' },
  { value: Category.COMBO, text: 'Комбо' },
  { value: Category.SHAWARMA, text: 'Шаурма' },
  { value: Category.PIZZA, text: 'Пицца' },
  { value: Category.VOK, text: 'Вок' },
  { value: Category.DESSERT, text: 'Дессерты' },
  { value: Category.SAUCE, text: 'Соусы' },
]
