import React, { useRef } from 'react';
import * as S from './NavBar.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTheme } from '../../features/theme/themeSlice';
import TURNTABLE from '../../assets/img/turntable.gif';
import {THEMES} from '../../features/theme/themeSlice';
import { Link, NavLink } from 'react-router-dom';
import { Squeeze as Hamburger } from 'hamburger-react'
import { selectNavigationOpen, setNavigation } from '../../features/navigation/navigationSlice';

// import HEAD from '../../assets/img/nobot_framework.gif';

const NavBar: React.FC<{}> = React.memo(() => {

  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);
  const open = useAppSelector(selectNavigationOpen);

  const closeNavigation = () => { dispatch(setNavigation(!open)) }

  return (
    <S.NavBar ref={nodeRef} open={open}>
      <S.NavContent>
        <S.VerticalLine >&nbsp;</S.VerticalLine>
        <Link to="/">
          <S.TitleContainer>
            <S.TitlePic src={TURNTABLE} />
            <S.TitleName>
              NOBOT #0000
            </S.TitleName>
          </S.TitleContainer>
        </Link>
        <S.NavList>
          <NavLink to="/" exact>
            <S.NavLink onClick={closeNavigation}>
              my self
            </S.NavLink>
          </NavLink>
          <NavLink to="/contact">
            <S.NavLinkMini onClick={closeNavigation}>
              contact me!
            </S.NavLinkMini>
          </NavLink>
        </S.NavList>
        <S.ThemePickContainer>
          {THEMES.map((theme, i) => (
            <S.ThemeButton
              key={theme.name}
              color={theme.background}
              border={theme.text}
              onClick={() => { dispatch(setTheme(i))}}/>
          ))}
        </S.ThemePickContainer>
        <S.VerticalLine up>&nbsp;</S.VerticalLine>
      </S.NavContent>
      <S.MyName open={open} onClick={() => dispatch(setNavigation(true))}>
        NOBOT #0000
      </S.MyName>
      <S.CloseNavButton onClick={closeNavigation}>
        <Hamburger size={20} toggled={open} toggle={() => dispatch(setNavigation(!open))} />
      </S.CloseNavButton>
    </S.NavBar>
  );
});

export default NavBar;