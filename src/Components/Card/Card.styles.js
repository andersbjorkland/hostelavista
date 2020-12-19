import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: var(--cardWidth);
  min-width: var(--cardWidth);
  height: 20rem;
  transition: 0.4s;
  
  color: var(--darkBlue);
  background-color: rgba(255, 255, 255, 0.85);
  
  img {
    margin: 1rem 0;
  }
  
  p {
    align-self: flex-start;
  }
`;