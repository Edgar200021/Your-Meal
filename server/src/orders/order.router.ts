import { Router } from 'express'
import { orderController } from './order.controller'

export const orderRouter: Router = Router()

orderRouter.get('/orders', orderController.getAll)
orderRouter.get('/orders/:id', orderController.getOne)
orderRouter.post('/orders', orderController.create)
orderRouter.put('/orders', orderController.update)
orderRouter.delete('/orders', orderController.deleteAll)
orderRouter.delete('/orders/:id', orderController.deleteOne)
