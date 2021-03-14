import { GetStaticProps } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

type Props = {
  org: {
    login: string
    description: string
    blog: string
  }
}

export default function Landing({ org }: Props) {
  return (
    <div>
      <Title>{org.login}</Title>
      <h3>{org.description}</h3>
      <p>
        {`Site: `}
        <a href={org.blog}>{org.blog}</a>
      </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat')
  const data = await response.json()
  return {
    props: { org: data },
  }
}
