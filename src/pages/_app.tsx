import { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import Navbar from '../components/Navbar'
import usePersistedState from '../utils/usePersistedState'
import GlobalStyle from '../styles/global'
import { light, dark } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
