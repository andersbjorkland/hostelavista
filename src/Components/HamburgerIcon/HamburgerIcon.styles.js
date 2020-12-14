import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  height: 1.6rem;
  div {
    border-radius: 0.2rem;
    background-color: var(--blue);
    height: 0.25rem;
    width: 2rem;
  }
  &.active {
    div {
      &:nth-child(1) {
        transform: rotateX(45deg);
      }
      background-color: red;
    }
  }
`;