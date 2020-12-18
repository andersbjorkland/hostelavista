import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    
    // Colors
    --purple: #4a1ca4;
    --brightBlue: #91b2f2;
    --blue: #1c49a4;
    --green: #1ca477;
    --red: #a41c33;
    --yellow: #d4c524;
    --darkYellow: #a4991c;
    
    // Dimensions
    --maxWidth: 1200px;
    --headerHeight: 6rem;
    --heroHeight: 30rem;
    
    --cardWidth: 15rem;
    
    --mediumScreenWidth: 800px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  .blue {
    color: var(--blue);
  }

  .green {
    color: var(--green);
  }

  .red {
    color: var(--red);
  }

  .yellow {
    color: var(--yellow);
  }


`;