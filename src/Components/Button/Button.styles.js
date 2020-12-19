import styled from "styled-components";

export const LinkButton = styled.a`
  width: fit-content;
  margin-top: auto;
  align-self: flex-start;
  font-size: 0.9rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--purple);
    color: white;
    border-radius: 0.3rem;
    
    width: 6rem;
    height: 1.6rem;
    
    letter-spacing: 1px;
  }
`;
