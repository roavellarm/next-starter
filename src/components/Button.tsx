import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme }) => theme.palette.onPrimary};
  background-color: ${({ theme }) => theme.palette.primary};
  width: 100%;
  transition: background-color 0.25s;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryVariant};
  }
`
