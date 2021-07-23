import { useContext } from 'react'
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import Container from './styles'

interface Props {
  toggleTheme(): void
}

export default function Navbar({ toggleTheme }: Props) {
  const { palette, title } = useContext(ThemeContext)

  return (
    <Container>
      Hello World
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, palette.primary)}
        onColor={palette.secondary}
      />
    </Container>
  )
}
