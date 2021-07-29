import { isValidEmail, isValidPassword } from 'utils/fieldsValidation'

import { showToast } from 'components/Toast'

type Login = {
  email: string
  password: string
}

export function loginValidation({ email, password }: Login): boolean {
  const errors = []

  if (!isValidEmail(email)) errors.push('Invalid email')
  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) {
    errors.map((error) => showToast('error', error))
    return false
  }

  return true
}
