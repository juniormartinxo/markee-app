declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      black: string
      lightBlack: string
      white: string
      gray: string
    }
    fonts: {
      primary: string
      secondary: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
      desktopL: string
    }
  }
}

export {}
