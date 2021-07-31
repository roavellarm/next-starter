import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import Field from 'components/Field'
import { Button } from 'components/Button'
import { showToast } from 'components/Toast'

import { fieldsValidation } from './helper'

const INITIAL_STATE = {
  password: '',
  email: '',
  passwordConfirmation: '',
}

export default function Login() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [fieldError, setFieldError] = useState(INITIAL_STATE)
  const { push } = useRouter()

  const handleFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields({ ...fields, [name]: value })
  }

  const submit = async () => {
    setFieldError(INITIAL_STATE)
    const { errors, password, email, passwordConfirmation } = fieldsValidation(fields)
    if (errors) return setFieldError({ password, email, passwordConfirmation })

    try {
      const { data } = await axios.post('/api/register', fields)

      showToast('success', `User ${data.user.email} register successfully!`)
      return push('/')
    } catch (error) {
      return showToast('error', error)
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
        error={fieldError.email}
      />

      <Field
        label="Enter password"
        name="password"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.password}
        error={fieldError.password}
      />

      <Field
        label="Confirm password"
        name="passwordConfirmation"
        onChange={handleFields}
        onKeyDown={submit}
        value={fields.passwordConfirmation}
        error={fieldError.passwordConfirmation}
      />

      <Button onClick={submit}>Sign in</Button>
    </Container>
  )
}
