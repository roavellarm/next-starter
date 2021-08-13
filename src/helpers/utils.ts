// import { hashSync, compareSync } from 'bcrypt'

export function isValidPassword(password: string) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export function isValidEmail(string: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(string)
}

// export function encryptPassword(password: string) {
//   return hashSync(password, `${process.env.SALT_KEY}`)
// }

// export function isCorrectPassword(password: string, hash: string) {
//   return compareSync(password, hash)
// }
