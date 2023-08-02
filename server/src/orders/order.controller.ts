import { Request, Response } from 'express'
import { Order } from './order.entity'
import { AppDataSource } from '../../app'
import { instanceToPlain, plainToInstance } from 'class-transformer'

class OrderController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const orders: Order[] = await AppDataSource.getRepository(Order).find()

      return res.json(instanceToPlain(orders)).status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const order: Order | null = await AppDataSource.getRepository(
        Order
      ).findOne({
        where: {
          id: id,
        },
      })

      if (!order) return res.json({ error: `There are no order with id ${id}` })

      return res.json(instanceToPlain(order)).status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id, name, lastName, type, address, floor, intercom } = req.body

    const newOrder: Order = {
      id,
      name,
      lastName,
      type,
      address,
      floor,
      intercom,
    }

    try {
      const createdOrder: Order = await AppDataSource.getRepository(Order).save(
        plainToInstance(Order, newOrder)
      )

      return res.json(instanceToPlain(createdOrder)).status(200)
    } catch (err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, lastName, type, address, floor, intercom } = req.body

    try {
      const order: Order | null = await AppDataSource.getRepository(
        Order
      ).findOne({
        where: {
          id,
        },
      })

      if (!order) return res.json({ error: `There are no order with id ${id}` })

      try {
        const updatedOrder = await AppDataSource.getRepository(Order).update(
          id,
          {
            name,
            lastName,
            type,
            address,
            floor,
            intercom,
          }
        )

        return res.json(instanceToPlain(updatedOrder)).status(200)
      } catch (_) {
        return res.json({ error: 'Internal Server Error' }).status(500)
      }
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const order: Order | null = await AppDataSource.getRepository(
        Order
      ).findOne({
        where: {
          id: id,
        },
      })

      if (!order) return res.json({ error: `There are no order with it ${id}` })

      try {
        const deletedProduct = await AppDataSource.getRepository(Order).remove(
          order
        )

        return res
          .json({ message: `Order with id ${id} successfully deleted` })
          .status(200)
      } catch (_) {
        return res.json({ error: 'Internal Server Error' }).status(500)
      }
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      const deleteAllItems = await AppDataSource.getRepository(Order).clear()
      return res.json({ message: `Orders successfully deleted` })
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }
}

export const orderController = new OrderController()
