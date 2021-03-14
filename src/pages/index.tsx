import { GetStaticProps } from 'next'
import Column from '../components/Column'
import { Title, Description, Paragraph } from '../styles/pages'

type Props = {
  org: {
    login: string
    description: string
    blog: string
  }
}

export default function Landing({ org }: Props) {
  return (
    <Column>
      <Title>{org.login}</Title>
      <Description>{org.description}</Description>
      <Paragraph>
        {`Site: `}
        <a href={org.blog}>{org.blog}</a>
      </Paragraph>
    </Column>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat')
  const data = await response.json()
  return {
    props: { org: data },
  }
}
