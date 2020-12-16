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
  margin: auto;
  height: var(--heroHeight);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  color: var(--blue);
`;

export const AnimatedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  overflow-x: hidden;
  
  >* {
    position: relative;
    left: -80%;
    animation: appear 4s ease-in-out infinite;
    
    @keyframes appear {
      0%{
        left: -80%;
      }
      
      20% {
        left: 0%;
      }
      
      80% {
        left: 0%;
      }
      100%{
        left: 120%;
      }
    }
  }
`;

