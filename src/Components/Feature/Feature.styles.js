import styled from "styled-components";
import map from "../../images/map.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  align-items: center;
  margin: 0 2rem;
  
  .fa-container {
    color: var(--blue);
  }
  
  .flex-row {
    text-align: left;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2rem 7rem 1.2rem 7rem;
  gap: 0.3rem;
  justify-items: flex-start;
        
  .info {
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    justify-content: flex-start;
  }
`;

export const Switcher = styled.div`
  position: relative;
`;


const arrowWidth = 40;
export const Arrow = styled.div`
  width: 0;
  height: 0;
  
  
  border-left: ${arrowWidth}px solid transparent;
  border-right: ${arrowWidth}px solid transparent;
  border-bottom: ${arrowWidth}px solid var(--lightBeige);
  
  transform-origin: left;
  transform: rotate(-45deg);

  position: absolute;
  left: -14px;
  top: 22.5px;
  

  &.active {
    border: none;
    width: 100%;
    height: 100%;
    background-color: var(--lightBeige);
    background-image: url(${map});
    background-size: contain;
    transform: rotate(0deg);
    left: 0;
    top: 0;

  }
`;

export const Indicator = styled.div`
  color: var(--blue);
  position: absolute;
  left: 8px;
  top: 3px;
  font-size: 20px;
  
  &.active {
    color: var(--darkBlue);
  }
`;