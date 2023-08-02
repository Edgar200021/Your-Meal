import { body, ValidationChain } from 'express-validator'

export const createValidator: ValidationChain = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('Id is required ')
    .isInt()
    .withMessage('Id should be a format of number '),
  body('img')
    .not()
    .isEmpty()
    .withMessage('Img is required')
    .trim()
    .isString()
    .withMessage('Img must be a format of string '),
  body('price')
    .not()
    .isEmpty()
    .withMessage('Price is required')
    .isInt()
    .withMessage('Price should be a format of number '),
  ,
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .trim()
    .isString()
    .withMessage('Title should be a format of string '),
  body('description')
    .not()
    .isEmpty()
    .withMessage('Description is required')
    .trim()
    .isString()
    .withMessage('Description should be a format of string '),
  body('ingridients')
    .not()
    .isEmpty()
    .withMessage('Ingridients is required')
    .isArray()
    .withMessage('Ingridients shoul be a format of array of strings'),
  body('weight')
    .not()
    .isEmpty()
    .withMessage('Weight is required')
    .isInt()
    .withMessage('Weight should be a format of number '),
  body('calory')
    .not()
    .isEmpty()
    .withMessage('Calory is required')
    .isInt()
    .withMessage('Calory should be a format of number '),
  ,
  body('category')
    .not()
    .isEmpty()
    .withMessage('Category is required')
    .trim()
    .isString()
    .withMessage('Category should be a format of string '),
]
