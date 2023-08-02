import { Router } from 'express'
import { productsController } from './products.controller'
import { createValidator } from './products.validator'

export const productRouter: Router = Router()

productRouter.get('/products', productsController.getAll)
//productRouter.get('/products', productsController.getByCategory)
productRouter.get('/products/:id', productsController.getOne)
productRouter.post('/products', productsController.create)
productRouter.delete('/products/:id', productsController.deleteOne)
productRouter.delete('/products', productsController.deleteAll)
productRouter.put('/products', productsController.update)
