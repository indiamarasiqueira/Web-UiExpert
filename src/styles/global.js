import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
    }
`;
export default GlobalStyle;
