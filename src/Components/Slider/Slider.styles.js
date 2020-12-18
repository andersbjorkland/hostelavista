import styled from "styled-components";
import leftArrow from "../../images/arrow.svg";

const height = 30;


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: ${height}rem;
  width: 100%;
  overflow-x: hidden;
  
  gap: 2rem;
`;

export const Carousel = styled.div`
  position: relative;
  top: 3rem;
  // left: calc((var(--cardWidth) + 0.5)/-2);
  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
  
  overflow-x: hidden;
  width: 100%;
  height: fit-content;
  
  &>* {
    transition: 0.8s;
    position: relative;
    //left: calc(3 * var(--cardWidth)/-2 );
    
    &:nth-child(1), &:nth-child(5) {
      opacity: 0.2;
    }
    &:nth-child(2), &:nth-child(4) {
      opacity: 0.5;
    }
  }
  
  &.animate-l >* {
    transition: 0.7s;
    animation: shiftL ease-in 0.8s forwards;
    
    @keyframes shiftL {
      0% {
        left: 0;
      }
      
      100% {
        left: calc(var(--cardWidth) * -1 );
      }
    }
    
    &:nth-child(3) {
      opacity: 0.5;
    }
  }

  &.animate-r >* {
    transition: 0.7s;
    animation: shiftR ease-in 0.8s forwards;

    @keyframes shiftR {
      0% {
        left: 0;
      }

      100% {
        left: var(--cardWidth);
      }
    }

    &:nth-child(3) {
      opacity: 0.5;
    }
  }
`;

export const ArrowBtn = styled.div`
  position: absolute;
  align-self: center;
  background-image: url(${leftArrow});
  background-size: cover;
  height: 4rem;
  width: 2.42rem;
  
  z-index: 30;
  
  &.left {
    left: 1rem;
  }
  
  &.right {
    transform: rotate(180deg);
    right: 1rem;
  }
  
`;