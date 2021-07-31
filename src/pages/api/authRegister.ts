import md5 from 'md5'
import { isValidEmail, isValidPassword } from 'utils/fieldsValidation'

import User from './models/User'

export interface IUser {
  firstname: string
  lastname: string
  email: string
  password: string
}

type IErrors = string[]

export function encryptPassword(password: string) {
  return md5(password, process.env.SECRET as string & { asBytes: true })
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email })
  return user
}

export async function registerValidation(data: IUser) {
  const errors: IErrors = []
  const { email, password } = data

  if (!isValidEmail(email)) errors.push('Invalid email')

  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await getUserByEmail(email)
  if (userExists) errors.push('This email already registered')

  return { errors }
}
