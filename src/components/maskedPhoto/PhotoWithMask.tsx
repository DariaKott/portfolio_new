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
  height: auto;
  position: relative;
  right: 0;
  top: 0;
  /* outline: 1px solid black; */

  transform: translateY(-20%) scale(1.3) translateX(40px);

  @media ${theme.media.tablet} {
    width: 100%;
    min-width: 100%;
    height: 70vh;

    transform: translateY(-20%) scale(1.3) translateX(60px);
  }

  @media ${theme.media.mobile} {
    transform: translateY(-20%) scale(1.6) translateX(60px);
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
  padding-top: 50px;
  width: 100%;
  height: 100%;
  object-fit: contain; 
  z-index: 2; 

  /* Маска для обрезки фото */
  -webkit-mask: url(${yellowSpot}) no-repeat center / contain;
  mask: url(${yellowSpot}) no-repeat center / contain;
`;
