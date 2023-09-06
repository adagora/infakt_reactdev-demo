import { css } from "styled-components";

const AllColors = `
  // FONTS
  --font-default: "Roboto", sans-serif;
  --font-mono: "Roboto Mono", monospace;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  // ------------------------------
`;

const Colors = `
  // Background
  --color-background: rgba(255,255,255, 1);
  // Borders
  --color-border: rgba(228,230,232, 1);
  --border: 1px solid var(--color-border);
  //Buttons
  --color-background-button: #E3F2FD;
  --color-text-button: #1E88E5;
  --color-background-button-hover: #1E88E5;
  --color-background-button-disabled-hover: #E3F2FD;
  --color-text-button-hover: rgba(255,255,255, 1);
  --radius-button: 8px;
  --padding-button: 8px 16px;
  // Text
  --color-text-primary: #000000;
  --color-text-secondary: #54585C;
  --color-text-active: #218DFF;
  --color-text-selection: #218DFF;
  // Shadow
  --shadow-color: #00000047;
  // States
  --color-error: #cd3636;
`;

const variables = css`
  // General styles for all themes
  :root {
    ${AllColors}
  }
  :root {
    // ------------------------------
    // COLOURS
    //-----------------------------
    ${Colors}
    // ------------------------------
    // RADIUS
    //-----------------------------
    --medium-radius: 16px;
  }
`;

export default variables;
