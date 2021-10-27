import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: flex-begin;
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  padding: 40px;
  padding-left: 20px;
  font-family: Helvetica;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
    padding-left: 40px;
  }

  @media screen and (max-width: 1024px) {
    overflow: scroll;
  }
`;
