import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #000;
        line-height: 1.21;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%,
            rgba(0,0,0,0.15) 100%), radial-gradient(at top center,
            rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
        background-blend-mode: multiply,multiply;
        min-height: 100vh;
        min-width: 320px;
    }

    button, select {
        font-family: 'Nunito', sans-serif;
    }

    a {
        text-decoration: none;
        
    }
`;

export default GlobalStyles;
