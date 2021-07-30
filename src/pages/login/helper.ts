import { isValidEmail, isValidPassword } from 'utils/fieldsValidation'

type Login = {
  email: string
  password: string
}

type Response = {
  errors: boolean
  email: string
  password: string
}

export function fieldsValidation({ email, password }: Login): Response {
  const response = {
    errors: false,
    email: '',
    password: '',
  }

  if (email === '') response.email = "Email can't be blank"
  else if (!isValidEmail(email)) response.email = 'Invalid email'

  if (password === '') response.password = "Password can't be blank"
  else if (!isValidPassword(password))
    response.password = 'Password must contain 8 characters, uppercase and lowercase'

  if (!!response.email || !!response.password) response.errors = true

  return response
}
