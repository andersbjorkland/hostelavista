import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    z-index: 20;
  
    @media screen and (max-width: 800px) {
      position: absolute;
      top: var(--headerHeight);
      right: 0;
      background-color: white;
      width: 14rem;
      padding: 1rem;

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