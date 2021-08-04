import { emailAndPasswordValidation } from 'validators/emailAndPasswordValidation'

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

export function registerFieldsValidation(data: Register): Response {
  const { email, password, passwordConfirmation } = data

  let response = {
    errors: false,
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const result = emailAndPasswordValidation({ email, password })

  response = { ...response, ...result }

  if (passwordConfirmation === '') response.passwordConfirmation = 'Password confirmation required'

  if (password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation)
    response.passwordConfirmation = "Passwords don't match"

  if (!!response.email || !!response.password || !!response.passwordConfirmation)
    response.errors = true

  return response
}
