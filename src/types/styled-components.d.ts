import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    palette: {
      text: string
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
