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
    document.title = "nobot #0000";
  });

  return (
    <Page>
      <S.Text>
        <h1>my self</h1>
        <p>
          hi! i'm evan kirkiles' boilerplate code for building a website.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum tincidunt ex in varius. Fusce pulvinar lorem quis leo lobortis finibus. Nunc tempor facilisis est a condimentum. Vestibulum faucibus, sapien eu vehicula cursus, arcu justo venenatis sapien, sit amet porta enim risus sed ligula. In eleifend turpis at fringilla aliquet. Sed sit amet ipsum iaculis, aliquam elit eget, consequat nibh. Donec ac cursus massa. Praesent efficitur turpis et tellus elementum consectetur vel in arcu. In semper justo eget dolor volutpat faucibus.
        </p>
        <p>
        Suspendisse potenti. Phasellus sollicitudin cursus nibh eget fermentum. Praesent condimentum rutrum iaculis. Maecenas non enim rutrum, tincidunt nulla vitae, aliquam mi. Duis lacus diam, mollis in viverra ac, rhoncus ac est. Proin quis malesuada elit. Integer dui metus, faucibus id lacinia a, vestibulum at ex. Pellentesque nec ligula odio.
        </p>
      </S.Text>
      <Gallery images={SELF_ART} />
    </Page>
  );
});

export default Self;