import styled from "styled-components";
import { Text } from "../../../components/text/Text";
import { theme } from "../../../assets/styles/Theme";
import { Button } from "../../../components/button/Button";

type ProjectPropsType = {
  title: string;
  text: string;
  src?: string;
  videoSrc?: string;
  link: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjInfo>
        <Title>{props.title}</Title>
        <ProjText>{props.text}</ProjText>
        <Link
          as="a"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Link>
      </ProjInfo>

      {props.videoSrc ? (
        <Video autoPlay loop muted playsInline poster={props.src}>
          <source src={props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      ) : (
        <Photo src={props.src} alt="Project cover" />
      )}

      {/* <Photo src={props.src} alt="Project cover" /> */}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.3);
  flex: 1;
  max-height: 526px;

  @media ${theme.media.mobile} {
    flex-direction: column-reverse;
    max-height: none;
    height: auto;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
    }
  }
`;

const ProjInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${theme.colors.bgProj};
  padding: 0 20px 10px 20px;

  @media ${theme.media.mobile} {
    width: 100%;
    /* flex: 1; */
    height: 524px;
  }
`;

const Title = styled.h3`
  margin-bottom: 10%;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 32px;
`;

const ProjText = styled(Text)`
  font-size: 18px;
`;

const Link = styled(Button)`
  background-color: inherit;
  border: 1px solid ${theme.colors.mainFonts};
  border-radius: 24px;
  display: inline-block;
  width: 150px;
  height: 43px;
  text-align: center;
  padding-top: 6px;
`;

const Photo = styled.img`
  width: 50%;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 100%;
    /* flex: 1; */
    height: 524px;
  }
`;

const Video = styled.video`
  width: 50%;
  height: 100%;
  object-fit: cover;
  display: block;

  @media ${theme.media.mobile} {
    width: 100%;
    height: 524px;
  }
`;
