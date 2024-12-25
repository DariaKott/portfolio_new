import styled from 'styled-components';
import yellowSpot from '../../assets/images/yellow-bg.svg';
import photo from '../../assets/images/photo/photo_header.png';

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
  position: relative;
  overflow: hidden;
  outline: 1px solid black;
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
