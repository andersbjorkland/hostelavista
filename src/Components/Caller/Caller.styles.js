import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--blue);
  min-height: 20rem;
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &>div {
    max-width: var(--maxWidth);
  }
  
  h2, h3, h4, p {
    letter-spacing: 2px;
    margin: 0;
    color: white;
  }
`;