import { Response, Request } from 'express'
import { User } from './user.entity'
import { AppDataSource } from '../../app'
import { instanceToPlain, plainToInstance } from 'class-transformer'

class UserController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const users: User[] = await AppDataSource.getRepository(User).find()

      return res.json(instanceToPlain(users)).status(200)
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const user: User | null = await AppDataSource.getRepository(User).findOne(
        {
          where: {
            id,
          },
        }
      )

      if (!user) return res.json({ error: `There are no user with id ${id}` })

      return res.json(instanceToPlain(user)).status(200)
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id, name, lastName, email, password } = req.body

    const newUser: User = {
      id,
      name,
      lastName,
      email,
      password,
    }

    try {
      const createUser = await AppDataSource.getRepository(User).save(
        plainToInstance(User, newUser)
      )

      return res.json(instanceToPlain(createUser)).status(200)
    } catch (e) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, lastName, email, password } = req.body

    try {
      const user: User | null = await AppDataSource.getRepository(User).findOne(
        {
          where: {
            id,
          },
        }
      )

      if (!user)
        return res
          .json({ error: `There are no user with id ${id}` })
          .status(500)

      try {
        const updatedUser = await AppDataSource.getRepository(User).update(
          id,
          plainToInstance(User, {
            id,
            name,
            lastName,
            email,
            password,
          })
        )

        return res.json(instanceToPlain(updatedUser)).status(200)
      } catch (e) {
        return res.json({ error: 'Internal Server Error' }).status(500)
      }
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      const deleteAll = await AppDataSource.getRepository(User).clear()

      return res.json({ message: 'Users successfully deleted' }).status(200)
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const user: User | null = await AppDataSource.getRepository(User).findOne(
        {
          where: {
            id,
          },
        }
      )

      if (!user) return res.json({ error: `There are no user with id ${id}` })

      try {
        const deletedUser = await AppDataSource.getRepository(User).remove(user)

        return res
          .json({ message: `User with id ${id} successfuly deleted` })
          .status(200)
      } catch (_) {
        return res.json({ error: 'Internal Server Error' }).status(500)
      }
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }
}


export const userController = new UserController()