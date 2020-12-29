import styled from 'styled-components';


const menuHeight = 1.6;
const menuWidth = 2;

export const Trigger = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  --height: ${menuHeight}rem;
  --width: ${menuWidth}rem;
  
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  height: var(--height);
  div {
    border-radius: 0.2rem;
    background-color: var(--blue);
    height: 0.25rem;
    width: var(--width);
    
    transition: 0.5s;
    
    &:nth-child(1) {
      transform-origin: left;
    }
    &:nth-child(2) {
      transform-origin: center;
    }
    &:nth-child(3) {
      transform-origin: left;
    }
  }
  &.active {
    div {
      &:nth-child(1) {
        transform: rotate(45deg);
        width: ${menuHeight/Math.sin(45)}rem;
      }
      &:nth-child(2) {
        transform: scaleX(0);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        width: ${menuHeight/Math.sin(45)}rem;
      }
    }
  }
`;