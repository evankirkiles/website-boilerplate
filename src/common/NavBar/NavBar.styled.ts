import styled, { keyframes } from 'styled-components';

export const TitleName = styled.div`
  font-size: 25px;
  letter-spacing: 4px;
  transform-origin: 50% 50%;
  transition: transform 0.2s ease-in-out;
`;

export const TitlePic = styled.img`
  width: 216px;
  height: 216px;
  margin-bottom: 10px;
  filter: ${({ theme }) => theme.filter };
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  &:hover ${TitleName} {
    transform: scale(1.1);
  }
`;

export const NavBar = styled.div<{open?: boolean}>`
  position: relative;
  min-width: 350px;
	min-height: 640px;
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  padding-right: 0px;
  height: 100%;
  font-size: 20px;
  // box-shadow: 5px 0 5px -2px rgba(0,0,0,0.2);
  background-color: ${({ theme }) => theme.background};
  transition: transform 1s ease-in-out, background-color: 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    padding-right: 20px;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%) translateY(60px)'};
  }
`;

export const NavContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const NavLink = styled.div`
  opacity: 0.5;

  .active & {
    opacity: 1;
  }

  &:hover {
    letter-spacing: 3px;
    opacity: 0.7;
  }
`;

export const NavLinkMini = styled.div`
  opacity: 0.8;
  font-size: 15px;
  margin-top: 20px;
  letter-spacing: 1px;

  .active & {
    opacity: 1;
  }

  &:hover {
    letter-spacing: 3px;
    opacity: 0.9;
  }
`;

export const ThemePickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 50%;
  margin-top: 30px;
`;

export const ThemeButton = styled.div<{color: string, border: string}>`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid ${({ border }) => border};
  margin-left: 10px;
  background-color: ${({ color }) => color};
  transform-origin: 50% 50%;
  cursor: pointer;

  &::first-of-type {
    margin-left: 0px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;


export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(7px) translateY(50px);
  }
  to {
    opacity: 0.5;
    transform: translateX(7px);
  }
`;

export const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateX(7px) translateY(-50px);
  }
  to {
    opacity: 0.5;
    transform: translateX(7px);
  }
`;

export const VerticalLine = styled.div<{up?: boolean}>`
  flex: 1;
  width: 10px;
  transform-origin: 50% 50%;
  transform: translateX(7px);
  border-left: 4px solid ${({ theme }) => theme.text};
  margin: 20px 0px;
  opacity: 0.5;
  animation: ${({ up }) => (up ? fadeUp: fadeDown)} 1s ease-in-out;

  @media screen and (max-height: 800px) {
    display: none;
  }
`;

export const CloseNavButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.4;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MyName = styled.div<{ open?: boolean }>`
  position: fixed;
  left: 20px;
  bottom: 20px;
  font-size: 15px;
  opacity: ${({ open }) => open ? 0 : 0.4};
  letter-spacing: 3px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const RobotPic = styled.img`
  filter: ${({ theme }) => theme.filter};
  width: 30px;
  height: 30px;
  margin-right: 10px;
  transform-origin: 50% 50%;
  transform: translateY(10px);
  opacity: 1;
`;

