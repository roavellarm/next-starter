import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <Field type="text" name="email" placeholder="Enter email" />
      <Field type="password" name="password" placeholder="Enter password" />

      <Button onClick={() => alert('You clicked me')}>Login</Button>
    </Container>
  )
}
