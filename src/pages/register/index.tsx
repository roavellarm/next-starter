import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { useRouter } from 'next/router'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'
import { showToast } from 'components/Toast'

import { registerValidation } from './helper'

const INITIAL_STATE = {
  password: '',
  email: '',
  passwordConfirmation: '',
}

export default function Login() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const { push } = useRouter()

  const handleFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  const onKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => key === 'Enter' && submit()

  const submit = () => {
    const isValid = registerValidation(fields)
    if (isValid) {
      showToast('success', 'User register successfully!')
      return push('/')
    }
  }

  return (
    <Container>
      <Title>Register</Title>

      <Field
        value={fields.email}
        onChange={handleFields}
        onKeyDown={onKeyDown}
        type="text"
        name="email"
        placeholder="Enter email"
      />

      <br />

      <Field
        type="password"
        name="password"
        onKeyDown={onKeyDown}
        placeholder="Enter password"
        value={fields.password}
        onChange={handleFields}
      />

      <br />

      <Field
        type="password"
        name="passwordConfirmation"
        onKeyDown={onKeyDown}
        value={fields.passwordConfirmation}
        placeholder="Confirm password"
        onChange={handleFields}
      />

      <Button onClick={submit}>Sign in</Button>
    </Container>
  )
}
