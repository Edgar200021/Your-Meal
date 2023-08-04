//import { IsEmail, Length } from 'class-validator'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  //  @Length(3, 30)
  @Column({
    type: 'text',
    nullable: false,
  })
  name: string

  //  @Length(3, 30)
  @Column({
    type: 'text',
    nullable: false,
  })
  lastName: string

  //  @Length(3, 30)
  //  @IsEmail({}, { message: 'Incorect email' })
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  email: string

  @Column({
    type: 'text',
    nullable: false,
  })
  password: string
}
