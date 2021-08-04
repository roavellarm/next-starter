import { useState } from 'react'
import { ChangeEvent, KeyboardEvent } from 'react'
import { BsEyeSlash } from 'react-icons/bs'

import { Container, Label, Input, Error, EyeContainer } from './styles'

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
  const [viewPassword, setViewPassword] = useState(false)
  const isPassword = fieldType[name] === 'password'

  const handleType = () => {
    if (isPassword) return viewPassword ? 'text' : 'password'

    return fieldType[name] || 'text'
  }

  return (
    <Container>
      {!!value && <Label>{label}</Label>}

      <Input
        type={handleType()}
        name={name}
        onKeyDown={(event) => onPressEnter(event)}
        placeholder={label}
        onChange={(event) => onChange(event)}
      />

      <EyeContainer>
        {isPassword && (
          <BsEyeSlash size="19px" type="button" onClick={() => setViewPassword(!viewPassword)} />
        )}
      </EyeContainer>

      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
