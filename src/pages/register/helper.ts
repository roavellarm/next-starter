import { isValidEmail, isValidPassword } from 'utils/fieldsValidation'

type Register = {
  email: string
  password: string
  passwordConfirmation: string
}

type Response = {
  errors: boolean
  email: string
  password: string
  passwordConfirmation: string
}

export function fieldsValidation(data: Register): Response {
  const { email, password, passwordConfirmation } = data
  const response = {
    errors: false,
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  if (email === '') response.email = "Email can't be blank"
  else if (!isValidEmail(email)) response.email = 'Invalid email'

  if (password === '') response.password = "Password can't be blank"
  else if (!isValidPassword(password))
    response.password = 'Password must contain 8 characters, uppercase and lowercase'

  if (passwordConfirmation === '')
    response.passwordConfirmation = "Password confirmation can't be blank"

  if (password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation)
    response.passwordConfirmation = "Passwords don't match"

  if (!!response.email || !!response.password || !!response.passwordConfirmation)
    response.errors = true

  return response
}
