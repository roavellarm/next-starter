import { ChangeEvent, useState } from 'react'

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
        label="Enter email"
        name="email"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.email}
      />

      <br />

      <Field
        label="Enter password"
        name="password"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.password}
      />

      <br />

      <Field
        label="Confirm password"
        name="passwordConfirmation"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.passwordConfirmation}
      />

      <Button onClick={submit}>Sign in</Button>
    </Container>
  )
}
