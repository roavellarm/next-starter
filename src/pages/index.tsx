import { GetStaticProps } from 'next'

import Column from 'components/Column'
import { Loader } from 'components/Loader'

import { Title, Description, Paragraph } from '../styles/pages'

type Props = {
  user: {
    login: string
    avatar_url: string
    bio: string
    blog: string
  }
}

export default function Landing({ user }: Props) {
  return (
    <Column center>
      <Title>{user.login}</Title>
      <Description>{user.bio}</Description>
      <Paragraph>
        {`Site: `}
        <a href={user.blog}>{user.blog}</a>
      </Paragraph>
      <Loader loading />
    </Column>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/roavellarm')
  const data = await response.json()
  return {
    props: { user: data },
  }
}
