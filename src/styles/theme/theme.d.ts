import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    palette: {
      lightText: string
      darkText: string

      primary: string
      primaryVariant: string

      secondary: string
      secondaryVariant: string

      background: string
      surface: string

      error: string
      warning: string
      info: string
      success: string
    }
  }
}
