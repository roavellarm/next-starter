import { ChangeEvent, KeyboardEvent } from 'react'

import styled from 'styled-components'

const StyledField = styled.input`
  width: 600px;
`

type FieldType = {
  name: string
  label: string
  value: string | number
  onChange(event: ChangeEvent<HTMLInputElement>): void // eslint-disable-line
  onKeyDown(): void
}

const fieldType: any = {
  passwordConfirmation: 'password',
  password: 'password',
}

export function Field({ name, label, value, onChange, onKeyDown }: FieldType) {
  const onPressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => key === 'Enter' && onKeyDown()

  return (
    <StyledField
      type={fieldType[name] || 'text'}
      name={name}
      onKeyDown={(event) => onPressEnter(event)}
      value={value}
      placeholder={label}
      onChange={(event) => onChange(event)}
    />
  )
}
