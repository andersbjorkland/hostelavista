import styled from "styled-components";
import map from "../../images/map.png";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  max-width: 800px;
  
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 1.5rem 4rem 1.5rem;
  
  .fa-container {
    color: var(--blue);
  }
  
  .flex-row {
    text-align: left;
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  &>div{
      display: grid;
      grid-template-columns: 1.2rem 7rem;
      gap: 0.3rem;
      justify-items: flex-start;
  }
`;

export const Switcher = styled.div`
  position: relative;
  background-color: var(--lightBeige);
`;

export const ImagePlaceholder = styled.div`
  min-height: 20rem;
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
    background-repeat: no-repeat;
    background-position: center;
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

export const FlexMix = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;