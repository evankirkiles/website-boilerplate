import React from 'react';
import * as S from './Gallery.styled';
import Artwork from './Artwork/Artwork';

export interface Image {
  src: string,
  caption?: string
}

interface GalleryProps {
  readonly images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({images}) => {
  return (
    <S.Col>
      {images.map((image) => <Artwork key={image.src} image={image} />)}
    </S.Col>
  );
}

export default Gallery;