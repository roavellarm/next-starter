import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/router'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

import { loginValidation } from './helper'

const INITIAL_STATE = { password: '', email: '' }

export default function Login() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const { push } = useRouter()

  const handleFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  const submit = () => loginValidation(fields) && push('/')

  return (
    <Container>
      <Title>Login</Title>

      <Field
        label="Email"
        name="email"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.email}
      />

      <br />

      <Field
        label="Password"
        name="password"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.password}
      />
      <Button onClick={submit}>Login</Button>
    </Container>
  )
}
