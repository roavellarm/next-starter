import { ChangeEvent, KeyboardEvent } from 'react'

import { Container, Label, Input, Error } from './styles'

type FieldType = {
  name: string
  label: string
  error?: string | undefined
  value: string
  onChange(event: ChangeEvent<HTMLInputElement>): void // eslint-disable-line
  onKeyDown(): void
}

const fieldType: any = {
  passwordConfirmation: 'password',
  password: 'password',
}

export default function Field({ name, label, error = '', value, onChange, onKeyDown }: FieldType) {
  const onPressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => key === 'Enter' && onKeyDown()

  return (
    <Container>
      {!!value && <Label>{label}</Label>}

      <Input
        type={fieldType[name] || 'text'}
        name={name}
        onKeyDown={(event) => onPressEnter(event)}
        value={value}
        placeholder={label}
        onChange={(event) => onChange(event)}
      />

      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
