import React from 'react';
import * as S from './Page.styled';

const FLEXES = [6, 4]

const Page: React.FC<{ reversed?: boolean }> = React.memo(({ children, reversed }) => {
  return (
    <S.Row reversed={reversed}>
      {children ? React.Children.map(children, (child, i) => (
        React.isValidElement(child) ? (
          <S.Col flex={FLEXES[i]}>
            {React.cloneElement(child)}
          </S.Col>
        ) : null
      )) : null}
    </S.Row>
  );
});

export default Page;