import React, { useState } from 'react';
import * as S from './Artwork.styled';
import type { Image } from '../Gallery';

interface ArtworkProps {
  image: Image
}

const Artwork: React.FC<ArtworkProps> = ({image}) => {

  const [loaded, setLoaded] = useState(false);

  return (
    <S.ImageContainer loaded={loaded}>
      <S.Image src={image.src} onLoad={() => setLoaded(true) }/>
      {image.caption ?
      <S.ImageCaption>
        {image.caption}
      </S.ImageCaption>: null}
    </S.ImageContainer>
  );
}

export default Artwork;