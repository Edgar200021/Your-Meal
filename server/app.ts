import express, { Express } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { DataSource } from 'typeorm'
import { Product } from './src/products/products.entity'
import { productRouter } from './src/products/products.router'
import { Order } from './src/orders/order.entity'
import { orderRouter } from './src/orders/order.router'
import { User } from './src/users/user.entity'
import { userRouter } from './src/users/user.router'

const app: Express = express(),
  port = 3300

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.HOST,
  username: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  synchronize: true,
  entities: [Product, Order, User],
})

async function initWithDatabase(): Promise<void> {
  try {
    const connect: DataSource = await AppDataSource.initialize()
    app.listen(port)
    console.log('Data Source has been initialized!')
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message)
  }
}

initWithDatabase()

app.use('/', productRouter)
app.use('/', orderRouter)
app.use('/', userRouter)
