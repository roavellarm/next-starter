import * as bcrypt from 'bcrypt'

import config from '../../next.config'

const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isValidPassword = (password: string) => passwordPattern.test(password)

export const isValidEmail = (email: string) => emailPattern.test(email)

export const encryptPassword = (password: string) =>
  bcrypt.hashSync(password + `${config.env.SECRET}`, `${config.env.SALT_ROUND}`)

export const verifyPassword = (password: string, hash: string) =>
  bcrypt.compareSync(password + `${config.env.SECRET}`, hash)
