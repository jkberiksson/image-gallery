import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
}

body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.color};
    transition: background-color .5s ease-in-out, color .5s ease-in-out;
}

`;

export default GlobalStyles;
