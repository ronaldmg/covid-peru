import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LeafletStyles } from './components/leaflet';
import vars from './vars';

export const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.15;
  }

  * {
    outline: none;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Montserrat', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    background: -webkit-linear-gradient(right, rgb(181, 0, 248), #ffff00);
  }

  .leaflet-container {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .leaflet-control-attribution {
    display: none;
  }
`;

const GlobalStyles = () => {
    const changeVhVariable = () => {
        const vh = typeof window !== 'undefined' && window.innerHeight * 0.01;
        typeof document !== 'undefined' && document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        changeVhVariable();
    }, []);

    return (
        <ThemeProvider theme={vars}>
            <Global />
            <LeafletStyles />
        </ThemeProvider>
    );
};

export default GlobalStyles;
