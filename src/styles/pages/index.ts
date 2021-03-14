import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text};
  padding-bottom: 2rem;
`

export const Description = styled.h3`
  color: ${({ theme }) => theme.palette.text};
  padding-bottom: 1rem;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.text};
`
