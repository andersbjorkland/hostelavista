import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    // Colors
    --purple: #4a1ca4;
    --brightBlue: #91b2f2;
    --blue: #1c49a4;
    --darkBlue: #12316d;
    --green: #1ca477;
    --red: #a41c33;
    --yellow: #d4c524;
    --darkYellow: #a4991c;
    --beige: #e7cdb6;
    --lightBeige: #fce1c7;

    // Dimensions
    --maxWidth: 1200px;
    --headerHeight: 6rem;
    --heroHeight: 35rem;

    --cardWidth: 15rem;

    --mediumScreenWidth: 800px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: var(--blue);
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

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0.3rem;

    & > .fa-container {
      width: 1.2rem;
    }
  }


`;