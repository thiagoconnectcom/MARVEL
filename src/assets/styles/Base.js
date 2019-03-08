import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow:200i,400,400i,500,600|Open+Sans:400,400i');
  body, html {
    width: 100%;
    height: 100%;
    background-color: #f0eef0;
  }
  html {
    font-size: 14px;
    font-family: var(--text);
    letter-spacing: 0.0325vw;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title);
  }
  img {
  max-width: 100%;
  height: auto;
  }
  #root {
    width: 100%;
    height: 100%;

  }
  * {
    box-sizing: border-box;
  }
`;

export default Base;
