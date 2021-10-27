import React, { useState, useEffect, useRef } from 'react';
import * as S from './Layout.styled';
import { Switch, Route, useLocation } from 'react-router-dom';
import Self from '../../pages/Self/Self';
import NavBar from '../../common/NavBar/NavBar';
import { CSSTransition } from 'react-transition-group';
import Contact from '../../pages/Contact/Contact';

const Layout: React.FC<{}> = React.memo(() => {

  const location = useLocation();
  const nodeRef = useRef(null);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit');
    }
  }, [location, displayLocation]);


  return (
    <S.Row>
      <NavBar />
      <CSSTransition
          appear
          nodeRef={nodeRef}
          in={transitionStage !== 'exit'}
          classNames="location"
          timeout={300}
          onExited={() => {
            setTransitionStage('enter');
            setDisplayLocation(location);
          }}
        >
        <S.Content ref={nodeRef}>
          <Switch location={displayLocation}>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Self />
            </Route>
          </Switch>
        </S.Content>
      </CSSTransition>
    </S.Row>
  );
});

export default Layout;