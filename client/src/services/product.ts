import { fetcher } from '../utils/fetcher'

import { IProduct } from '../models/product/product'

const RequestUrl = 'http://localhost:3300/'

export class ProductService {
  static async get(): Promise<IProduct[]> {
    try {
      const data: IProduct[] = await fetcher<IProduct[]>(
        RequestUrl + 'products',
        'GET',
        {}
      )
      return data
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message)
    }

    throw new Error()
  }

  static async getOne(id: number): Promise<IProduct> {
    try {
      const data: IProduct = await fetcher<IProduct>(
        RequestUrl + `products/${id}`,
        'GET',
        {}
      )
      return data
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message)
    }
    throw new Error()
  }

  static async create(body: IProduct): Promise<IProduct> {
    try {
      const data: IProduct = await fetcher<IProduct>(
        RequestUrl + `products`,
        'POST',
        body
      )
      return data
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message)
    }
    throw new Error()
  }

  static async update(body: IProduct): Promise<IProduct> {
    try {
      const data: IProduct = await fetcher<IProduct>(
        RequestUrl + `products`,
        'PUT',
        body
      )
      return data
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message)
    }
    throw new Error()
  }

  static async delete(
    id: string
  ): Promise<{ error: string } | { message: string }> {
    const response = await fetcher<{ error: string } | { message: string }>(
      RequestUrl + `products/${id}`,
      'DELETE'
    )

    return response
  }
}
