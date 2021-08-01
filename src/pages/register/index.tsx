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
  email: '',
  password: '',
  passwordConfirmation: '',
}

type Fields = {
  password: string
  email: string
  passwordConfirmation: string
}

type FieldList = {
  label: string
  name: keyof Fields
}

export default function Login() {
  const [fields, setFields] = useState<Fields>(INITIAL_STATE)
  const [fieldError, setFieldError] = useState<Fields>(INITIAL_STATE)
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

  const fieldList: FieldList[] = [
    { label: 'Enter email', name: 'email' },
    { label: 'Enter password', name: 'password' },
    { label: 'Confirm password', name: 'passwordConfirmation' },
  ]

  return (
    <Container>
      <Title>Register</Title>

      {fieldList.map((f) => (
        <Field
          key={f.name}
          label={f.label}
          name={f.name}
          onChange={handleFields}
          onKeyDown={submit}
          value={fields[f.name]}
          error={fieldError[f.name]}
        />
      ))}

      <Button onClick={submit}>Register</Button>
    </Container>
  )
}
