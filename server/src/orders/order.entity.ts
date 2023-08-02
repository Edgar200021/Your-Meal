import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { OrdersType } from '../enums/order'

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text', {
    nullable: false,
  })
  name: string

  @Column('text', {
    nullable: false,
  })
  lastName: string

  @Column({
	type: 'enum',
	enum: OrdersType,
	default: OrdersType.PICKUP
  })
  type?: OrdersType

  @Column('text')
  address?: string

  @Column('int')
  floor?: number

  @Column('int')
  intercom?: number
}
