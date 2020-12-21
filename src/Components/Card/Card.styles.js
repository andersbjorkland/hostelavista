import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: var(--cardWidth);
  min-width: var(--cardWidth);
  height: 22rem;
  transition: 0.4s;
  
  color: var(--darkBlue);
  background-color: rgba(255, 255, 255, 0.85);
  
  h2, h3, h4, p {
    color: var(--darkBlue);
  }
  
  img {
    margin: 1rem 0;
    border-radius: 0.2rem;
  }
  
  .flex-row {
    margin-bottom: 0.6rem;
  }
  
  p {
    align-self: flex-start;
    text-align: left;
  }
`;