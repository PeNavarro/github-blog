import { createGlobalStyle } from "styled-components";

export const GlobalStyte = createGlobalStyle`
      *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }

      body{
            background-color: ${props => props.theme['base-background']}
      }

      h1, h2, h3, h4, h5, h6, p, a, li, span, input, textarea, button{
            line-height: 160%;
            font-family: 'Nunito', sans-serif;
      }
`