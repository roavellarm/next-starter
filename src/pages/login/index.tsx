import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { useRouter } from 'next/router'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

import { loginValidation } from './helper'

const INITIAL_STATE = { password: '', email: '' }

export default function Login() {
  const [fields, setFields] = useState(INITIAL_STATE)

  const handleFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  const { push } = useRouter()

  const onKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => key === 'Enter' && submit()

  const submit = () => loginValidation(fields) && push('/')

  return (
    <Container>
      <Title>Login</Title>

      <Field
        name="email"
        onChange={handleFields}
        onKeyDown={onKeyDown}
        placeholder="Email"
        type="email"
        value={fields.email}
      />

      <br />

      <Field
        name="password"
        onChange={handleFields}
        onKeyDown={onKeyDown}
        placeholder="Password"
        type="password"
        value={fields.password}
      />
      <Button onClick={submit}>Login</Button>
    </Container>
  )
}
