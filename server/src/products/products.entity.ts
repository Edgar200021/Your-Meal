import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({
    type: 'text',
    unique: true,
    nullable: false,
  })
  title: string

  @Column({
    type: 'text',
    nullable: false,
  })
  img: string

  @Column({
    type: 'int',
    nullable: false,
  })
  price: number

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  description: string

  @Column('text', {
    array: true,
    nullable: false,
  })
  ingredients: string[]

  @Column('int', {
    nullable: false,
  })
  weight: number

  @Column('int', {
    nullable: false,
  })
  calories: number

  @Column('text', {
    nullable: false,
  })
  category: string
}
