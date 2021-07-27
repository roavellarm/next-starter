import React, { useState } from 'react'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

import { isValidEmail, isValidPassword } from '../../utils/authValidations'

export default function Login() {
  // if (!isValidEmail(email)) errors.push('Invalid email')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(event: any) {
    event.preventDefault()

    try {
      if (!isValidEmail(email)) return alert('Email invalido')

      if (!isValidPassword(password))
        return alert('Password must contain 8 characters, uppercase and lowercase')

      return alert('Login done with success!!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Field
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Enter email"
        />
        <br />
        <Field
          type="password"
          name="password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  )
}
