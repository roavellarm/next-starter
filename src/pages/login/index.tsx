import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'
import { emailAndPasswordValidation } from 'validators/emailAndPasswordValidation'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import Field from 'components/Field'
import { Button } from 'components/Button'
import { showSuccess } from 'components/Toast'

const INITIAL_STATE = { password: '', email: '' }

export default function Login() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [fieldError, setFieldError] = useState(INITIAL_STATE)

  const { push } = useRouter()

  const handleFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  const cleanFields = () => {
    setFields({ ...fields, password: '' })
    setFieldError(INITIAL_STATE)
  }

  const submit = async () => {
    cleanFields()
    const { errors, password, email } = emailAndPasswordValidation(fields)
    if (errors) return setFieldError({ password, email })

    const { data } = await axios.post('/api/login', fields)

    showSuccess(`User ${data?.name} logged successfully!!`)
    push('/')
  }

  return (
    <Container>
      <Title>Login</Title>

      <Field
        label="Email"
        name="email"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.email}
        error={fieldError.email}
      />

      <Field
        label="Password"
        name="password"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.password}
        error={fieldError.password}
      />
      <Button onClick={submit}>Login</Button>
    </Container>
  )
}
