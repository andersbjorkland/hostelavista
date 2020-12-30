import styled from "styled-components";

export const LinkButton = styled.div`
  width: fit-content;
  margin-top: auto;
  align-self: flex-start;
  font-size: 0.9rem;
  
  a {
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: var(--${props => props.bg});
    border-width: 2px;
    border-style: solid;
    
    background-color: var(--${props => props.outlined ? "white" : props.bg});
    color: var(--${props => props.outlined ? props.bg : "white"});
    border-radius: 0.3rem;
    
    width: 6rem;
    height: 1.6rem;
    
    letter-spacing: 1px;
  }
`;

LinkButton.defaultProps = {
    bg: "purple",
    outlined: false
}
