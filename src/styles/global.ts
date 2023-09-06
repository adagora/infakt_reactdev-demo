import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`
  // global root variables
  ${variables}
  html, body {  
    width: 100%;
    min-height: 100vh;
    min-width: 300px;
    margin: 0;
    font-size: 62.5%;
    line-height: 10px;
    font-family: var(--font-default);
    background-color: var(--color-background);
    color: var(--color-text-primary);
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *::selection {
    background: var(--color-background-selection); /* WebKit/Blink Browsers */
    color: var(--color-text-selection);
  }
  *::-moz-selection {
    background: var(--color-background-selection); /* Gecko Browsers */
  }
  *::-webkit-selection {
    background: var(--color-background-selection); /* Chrome Browsers */
  }
  *::-moz-placeholder {
    line-height: revert;
  }
  ::-webkit-scrollbar {
    width: 6px!important;
    height: 6px!important;
  }
  ::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.2);
  }
  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {   
    text-decoration: underline;
    cursor: pointer;
      &:link, 
      &:visited {
        color: var(--color-text-primary);
      }
  }
  h1, h2, h3 {
    margin: 0;
    margin: 0.5rem 0;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  #root {
    height: 100%;
    font-size: 1.3rem;
  }
  button {
    background-color: var(--color-background-button);
    color: var(--color-text-button);
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transition-property: color, background-color, border-color, opacity;
    border: 0;
    font-weight: var(--font-weight-medium);
    outline: 0;
    border-radius: var(--radius-button);
    padding: var(--padding-button);
    &:hover {
      background-color: var(--color-background-button-hover);
      color: var(--color-text-button-hover);
    }
    &:disabled,
    &[disabled]{
      &:hover {
        background-color: var(--color-background-button-disabled-hover);
      }
      opacity: .35;
      pointer-events: none;
    }
  }
  
  .noScroll {
    overflow: hidden;
  }

  .not-implemented {
    display: none !important
  }
  
`;

export default GlobalStyles;
