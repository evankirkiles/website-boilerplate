import styled from 'styled-components';

export const ImageContainer = styled.div<{ loaded?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: ${({ loaded }) => loaded ? 1 : 0};
  transition: opacity 0.4s ease-in-out, color: 0.2s ease-in-out;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  margin: auto;
  filter: ${({ theme }) => theme.filter};
`;

export const ImageCaption = styled.div<{}>`
  font-size: 15px;
  margin: auto;
  opacity: 0.5;
  letter-spacing: 2px;
`;
