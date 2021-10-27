import styled from 'styled-components';

export const Text = styled.div`
  max-width: 700px;
  max-height: 100%;
  overflow: scroll;
`;

export const ResumeDownload = styled.h4`
  transform-origin: 0% 50%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MediaRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-begin;
  align-items: center;
`;

export const SocialMedia = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  transform-origin: 50% 50%;

  &:hover {
    transform: scale(1.1);
  }
`;
