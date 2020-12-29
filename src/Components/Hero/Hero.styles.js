import styled from "styled-components";
import vistaSm from "../../images/vista-1-s.png"
import vistaLg from "../../images/vista-1-lg.png"

export const Background = styled.div`
  background-image: url(${vistaSm});
  width: 100%;
  height: var(--heroHeight);
  background-size: cover;
  background-repeat: no-repeat;
  
  @media screen and (min-width: 800px) {
    background-image: url(${vistaLg});
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: var(--heroHeight);
  position: absolute;
  top: var(--headerHeight);
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  overflow-x: hidden;
  margin: auto;
  height: var(--heroHeight);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h1 {
    text-align: center;
  }
  
  color: var(--blue);
`;

export const AnimatedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  overflow-x: hidden;
  position: relative;
  
  //min-width: 30rem;
  
  >* {
    margin:0;
    position: relative;
    visibility: visible;
    width: 8rem;
    --adjust-width: 8rem;
    
    z-index: 25;

    &:nth-child(1) {
      animation: appear-1 12s ease-in-out infinite;

      @keyframes appear-1 {
        0%{
          //left: calc(-80% + var(--adjust-width));
          left: calc(-80% + var(--adjust-width));
        }

        10%{
          //left: calc(0% + var(--adjust-width));
          left: calc(0% + var(--adjust-width));
        }

        20% {
          //left: calc(0% + var(--adjust-width));
          left: calc(0% + var(--adjust-width));
        }

        33%{
          //left: calc(120% + var(--adjust-width));
          left: calc(120% + var(--adjust-width));
        }
        
        100%{
          //left: calc(120% + 7.5rem);
          left: calc(120% + 7.5rem);
        }
      }
    }
    &:nth-child(2) {
      animation: appear-2 12s ease-in-out infinite;
      
      @keyframes appear-2 {
        0%{
          left: -80%;
        }

        33%{
          left: -80%;
        }

        43% {
          left: 0;
        }

        53%{
          left: 0;
        }
        
        66% {
          left: 120%;
        }
        
        100% {
          left: 120%;
        }
      }
    }
    
    &:nth-child(3) {
      animation: appear-3 12s ease-in-out infinite;

      @keyframes appear-3 {
        0% {
          left: calc(-80% - var(--adjust-width));
        }

        66% {
          left: calc(-80% - var(--adjust-width));
        }

        76% {
          left: calc(0% - var(--adjust-width));
        }

        86% {
          left: calc(0% - var(--adjust-width));
        }

        99% {
          left: calc(120% - var(--adjust-width));
        }

        100% {
          left: calc(120% - var(--adjust-width));
        }
      }
    }
    
    
  }
`;

