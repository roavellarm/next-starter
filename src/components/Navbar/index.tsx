import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { shade } from 'polished'
import Container from './styles'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
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

export default Header
