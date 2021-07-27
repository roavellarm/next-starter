import { Title } from 'styles/pages'

import { Container } from 'components/Container'
import { Field } from 'components/Field'
import { Button } from 'components/Button'

export default function Login() {
  return (
    <Container>
      <Title>Register</Title>
      <form>
        <Field type="email" name="email" placeholder="Enter email" />
        <br />
        <Field type="password" name="password" placeholder="Enter password" />
        <br />
        <Field type="password" name="password-confirmation" placeholder="Confirm password" />

        <Button type="submit" onClick={() => alert('You clicked me')}>
          Sign in
        </Button>
      </form>
    </Container>
  )
}
