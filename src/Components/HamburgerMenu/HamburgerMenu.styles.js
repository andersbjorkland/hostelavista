import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
  
    @media screen and (max-width: 800px) {
      position: absolute;
      top: var(--headerHeight);
      right: 2rem;
      
      flex-direction: column;
      &.hide {
        display: none;
      }
      &.show {
        transform-origin: top;
        transform: scaleY(0);
        display: flex;
        align-items: flex-end;
        animation: scaleIn 1s forwards;
        
        @keyframes scaleIn {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
      }
    }
`;