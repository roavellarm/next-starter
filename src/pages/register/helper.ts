import { isValidEmail, isValidPassword } from 'utils/fieldsValidation'

import { showToast } from 'components/Toast'

type Register = {
  email: string
  password: string
  passwordConfirmation: string
}

export function registerValidation(data: Register): boolean {
  const { email, password, passwordConfirmation } = data
  const errors = []

  if (email === '') {
    errors.push("Email can't be blank")
  } else {
    if (!isValidEmail(email)) errors.push('Invalid email')
  }

  if (password === '') {
    errors.push("Password can't be blank")
  } else {
    if (!isValidPassword(password))
      errors.push('Password must contain 8 characters, uppercase and lowercase')
  }

  if (passwordConfirmation === '') errors.push("Password confirmation can't be blank")

  if (password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation)
    errors.push("Passwords don't match")

  if (errors.length) {
    errors.map((error) => showToast('error', error))
    return false
  }

  return true
}
