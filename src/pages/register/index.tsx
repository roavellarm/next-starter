import { useState } from 'react'

import { useRouter } from 'next/router'
import { isValidPassword } from 'utils/authValidations'

import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

export default function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const router = useRouter()

  async function handleSubmit(event: any) {
    event.preventDefault()

    try {
      if (passwordConfirmation !== password) return alert('Senhas não conferem!')

      if (!isValidPassword(password))
        return alert('Password must contain 8 characters, uppercase and lowercase')

      router.push('/')
      return alert('User Register done with success!!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <Container>
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        <Field
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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
        <br />
        <Field
          type="password"
          name="passwordConfirmation"
          id="password"
          value={passwordConfirmation}
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <Button type="submit">Sign in</Button>
      </form>
    </Container>
  )
}
