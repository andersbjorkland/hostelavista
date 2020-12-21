import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  
  &.topper {
    top: -5rem;
    height: 5rem;
  }
  
  &.downer {
    bottom: -0.5px;
    height: 5rem;
  }
  
  img {
    height: 100%;
    width: 100%;
  }
  
  svg {
    width: 100%;
  }

`;