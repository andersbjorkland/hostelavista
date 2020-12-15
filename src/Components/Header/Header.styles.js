import styled from 'styled-components';
import diagonalDivide from '../../images/diagonal-divide.svg';

export const Wrapper = styled.div`
  background: var(--blue);
  
  height: var(--headerHeight);
  padding: 0 2rem;
  
  font-size: 1.2rem;
  background-image: url(${diagonalDivide});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 60% 100%;
  
  
  a, p {
    color: white;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  height: 100%;
  
  display: flex;
  align-items: center;


  >* {
    margin-left: auto;
  }
  
  >*:first-child {
    margin-left: 0;
    justify-self: flex-start;
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a, p {
    color: var(--blue);
    text-decoration: none;
  }
`;

