// import { Global, css } from '@emotion/react'
import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { themedPalette, themes } from './themeVariables'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-family: -apple-system, 'IBMPlexSansKR-Light', 'Courier New', monospace;
    user-select: none;
    max-width: 100vw;
    ${themes.light}
    background-color: ${themedPalette.bg_color};

    @media screen and (max-width: 1300px ) {
      overflow-x: hidden;
    }
  }
  body[data-theme='light'] {
    ${themes.light};
  }

  body[data-theme='dark'] {
    ${themes.dark};
  }
`

export default GlobalStyle
