import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export default function Landing() {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  )
}
