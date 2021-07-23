import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

export default function Login() {
  return (
    <Container>
      <Title>Register</Title>
      <Field type="text" name="email" placeholder="Enter email" />
      <Field type="password" name="password" placeholder="Enter password" />
      <Field type="password" name="password-confirmation" placeholder="Confirm password" />

      <Button onClick={() => alert('You clicked me')}>Sign in</Button>
    </Container>
  )
}
