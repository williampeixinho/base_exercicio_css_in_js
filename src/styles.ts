import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background: #f2efe7;
    color: #6b3f49;
  }

  a { color: inherit; }
`
