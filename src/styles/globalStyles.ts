import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }

  html {
  overflow-x: hidden;
  max-width: 100vw;
  }

  body {
  overflow-x: hidden;
  max-width: 100vw;
    background-color:rgb(230, 241, 247);
  }

  svg {
  width: 24px;
  height: 24px;
}

/* @media (max-width: 768px) {
    .circle-container,
    .side-line,
    .timeline-center-line,
    .TimelinePointLabel {
      display: none !important;
    }
  } */
`;
