import styled from 'styled-components';

export const Row = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: ${({ reversed }) => reversed ? 'column' : 'column-reverse'};
  justify-content: center;
  align-items: center;
  min-height: 100%;
  max-width: 500px;
  margin: auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-begin;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .exit-active {
    opacity: 1;
  }

  .location-enter & {
    opacity: 0;
    transform: translate(0px, 50px);
    transition: all 0.3s ease-in-out;
  }

  .location-enter-active & {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .location-exit & {
    opacity: 1;
  }

  .location-exit-active & {
    opacity: 0;
    transform: translate(0px, -50px);
    transition: all 0.3s ease-in-out;
  }
`;

export const Col = styled.div<{flex?: number}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 1024px) {
    flex: ${({ flex }) => flex};
    overflow: hidden;
  }
`;
