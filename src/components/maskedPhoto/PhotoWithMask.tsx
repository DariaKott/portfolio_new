import styled from 'styled-components';
import yellowSpot from '../../assets/images/whole-yellow-bg.svg';
import photo from '../../assets/images/photo/photo_header.png';
import { theme } from '../../assets/styles/Theme';

export const PhotoWithMask = () => {
  return (
    <PhotoWrapper>
      <Spot src={yellowSpot} alt="" aria-hidden="true" />
      <Photo src={photo} alt="Person silhouette" />
    </PhotoWrapper>
  );
};

const PhotoWrapper = styled.div`
  width: 50%;
  /* min-width: 720px;
  height: 629px; */
  height: auto;
  position: relative;
  /* overflow: hidden; */
  right: 0;
  top: 0;
  outline: 1px solid black;

  /* @media ${theme.media.tablet} {
    width: 40%;
    min-width: 40%;
    /* min-width: 400px; 
    height: auto;
  } */

  @media ${theme.media.tablet} {
    width: 100%;
    min-width: 100%;
    height: 70vh;
  }
`;

const Spot = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1; 
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: 2; 

  /* Маска для обрезки фото */
  -webkit-mask: url(${yellowSpot}) no-repeat center / contain;
  mask: url(${yellowSpot}) no-repeat center / contain;
`;
