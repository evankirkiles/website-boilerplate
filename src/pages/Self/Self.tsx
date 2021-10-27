import React, { useEffect } from 'react';
import * as S from './Self.styled';
import Page from '../../hocs/Page/Page';
import { Link } from 'react-router-dom';
import Gallery from '../../hocs/Gallery/Gallery';

import PIECE1 from '../../assets/img/art/piece1.png';

const SELF_ART = [
  {
    src: PIECE1,
    caption: 'Piece 1.'
  }
]

const Self: React.FC<{}> = React.memo(() => {
  useEffect(() => {
    document.title = "evan kirkiles";
  });

  return (
    <Page>
      <S.Text>
        <h1>my self</h1>
        <p>
          hi! i'm evan kirkiles' boilerplate code for building a website.
        </p>
      </S.Text>
      <Gallery images={SELF_ART} />
    </Page>
  );
});

export default Self;