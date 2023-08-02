import { Router } from 'express'
import { userController } from './user.controller'

export const userRouter: Router = Router()

userRouter.get('/users', userController.getAll)
userRouter.get('/users:id', userController.getOne)
userRouter.post('/users', userController.create)
userRouter.put('/users', userController.update)
userRouter.delete('/users', userController.deleteAll)
userRouter.delete('/users/:id', userController.deleteOne)

