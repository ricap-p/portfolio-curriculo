

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:${({ theme }) => theme.fonts.primary};
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.white};

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

button{
    cursor:pointer;
    border:none;
    background:none;
    font-family:inherit;
}

input,
textarea,
button{
    font-family:inherit;
}

a{
    text-decoration:none;
    color:inherit;
}

ul{
    list-style:none;
}

img{
    max-width:100%;
    display:block;
}

`;