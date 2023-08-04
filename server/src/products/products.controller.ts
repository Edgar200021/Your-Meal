import { AppDataSource } from '../../app'
import { Product } from './products.entity'
import { Request, Response } from 'express'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { UpdateResult } from 'typeorm'

class ProductsController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const products: Product[] = await AppDataSource.getRepository(
        Product
      ).find()

      return res.json(instanceToPlain(products)).status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  //  async getByCategory(req: Request, res: Response): Promise<Response> {
  //    const { category } = req.query

  //    if (!category)
  //      //  res.json({ error: `There are no products with category ${category}` })
  //      return res.json({
  //        error: `Empty query`,
  //      })

  //    try {
  //      const filteredByCategory: Product[] | null =
  //        await AppDataSource.getRepository(Product).find({
  //          where: {
  //            category: category,
  //          },
  //        })

  //      return res.json(instanceToPlain(filteredByCategory)).status(200)
  //    } catch (_err) {
  //      return res.json({ error: 'Internal Server Error' }).status(500)
  //    }
  //  }

  async getOne(req: Request, res: Response): Promise<Response> {
    if (!req.params.id) return res.json({ error: 'Invalid id' }).status(400)

    try {
      const product: Product | null = await AppDataSource.getRepository(
        Product
      ).findOne({
        where: {
          id: parseInt(req.params.id),
        },
      })

      if (!product)
        return res.json({
          error: `There are no prodct with id ${req.params.id}`,
        })

      return res.json(instanceToPlain(product)).status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {
      id,
      img,
      price,
      title,
      description,
      ingredients,
      weight,
      calories,
      category,
    } = req.body

    try {
      const createdProducts: Product = await AppDataSource.getRepository(
        Product
      ).save(
        plainToInstance(Product, {
          id,
          img,
          price,
          title,
          description,
          ingredients,
          weight,
          calories,
          category,
        })
      )

      return res.json(instanceToPlain(createdProducts)).status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      img,
      price,
      title,
      description,
      ingridients,
      weight,
      calory,
      category,
    } = req.body

    if (!id && typeof id === 'string')
      return res.json({
        error: 'Id is required, and must be format of a number',
      })

    try {
      const product: Product | null = await AppDataSource.getRepository(
        Product
      ).findOne({
        where: {
          id,
        },
      })

      if (!product)
        return res.json({ error: `There are no product with id ${id}` })

      try {
        const updatedProduct: UpdateResult = await AppDataSource.getRepository(
          Product
        ).update(
          id,
          plainToInstance(Product, {
            img,
            price,
            title,
            description,
            ingridients,
            weight,
            calory,
            category,
          })
        )

        return res.json(instanceToPlain(updatedProduct)).status(200)
      } catch (_err) {
        return res.json({ error: 'Internal Server Error' }).status(500)
      }
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    if (!id)
      return res.json({
        error: 'Id is required',
      })

    try {
      const selfProduct: Product | null = await AppDataSource.getRepository(
        Product
      ).findOne({
        where: {
          id: Number(id),
        },
      })

      if (!selfProduct)
        return res.json({ error: `There are no product with id ${id}` })

      const deletedProduct = await AppDataSource.getRepository(Product).remove(
        selfProduct
      )

      return res
        .json({ message: `Product with id ${id} successfully deleted` })
        .status(200)
    } catch (_err) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      const deleteAllProducts = await AppDataSource.getRepository(
        Product
      ).clear()
      return res.json({ message: 'Products successfuly deleted' })
    } catch (_) {
      return res.json({ error: 'Internal Server Error' }).status(500)
    }
  }
}

export const productsController = new ProductsController()
