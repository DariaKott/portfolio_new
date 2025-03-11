import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Text } from "../../components/text/Text";
import { theme } from "../../assets/styles/Theme";
import { Container } from "../../components/Container";
import { PhotoWithMask } from "../../components/maskedPhoto/PhotoWithMask";
import { font } from "../../assets/styles/Common";
import Typewriter from "typewriter-effect";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapperMain justify="space-between">
          <Info>
            <StyledH1>
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledH1>
            <StyledHello id={"about"}>
              Hello, <span>my name is</span> <span>Daria Kotelnikova</span>
            </StyledHello>
            <InfoText>
              I am an aspiring Frontend Developer with a passion for creating
              interactive and user-friendly web applications. I take pride in
              writing well-structured code and designing responsive, adaptive
              pages. I am detail-oriented but prefer to focus on functionality
              rather than just aesthetics. Eager to grow my skills, I am
              actively seeking opportunities to contribute to real projects and
              learn in a dynamic team. With a strong foundation in HTML, CSS,
              JavaScript, and React, I am ready for new challenges.
            </InfoText>
            <a
              href="https://docs.google.com/document/d/1SmTFd9N5AEfeMxR-85NSW-Tom0xyBRxOeg3MOCiWAnA/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>CV</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/daria-kotelnikova-2566071aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn>LinkedIn</LinkedIn>
            </a>
          </Info>
          <PhotoWithMask />
        </FlexWrapperMain>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 5%;
  overflow: clip;

  @media ${theme.media.tablet} {
    padding-top: 10%;
  }
  @media ${theme.media.mobile} {
    padding-top: 20%;
  }
`;

const FlexWrapperMain = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;

const StyledH1 = styled.h1`
  color: ${theme.colors.accent};
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`;

const StyledHello = styled.div`
  ${font({
    family: "Roboto",
    weight: 700,
    Fmax: 64,
    Fmin: 36,
    lineHeight: 1.5,
    color: theme.colors.hello,
  })};

  padding: 50px 0;

  span {
    white-space: nowrap;
  }
`;

const Info = styled.div`
  width: 40%;
  padding: 20px 0 20px 0;
  z-index: 999;

  a + a {
    margin-left: 12px;
  }

  @media ${theme.media.tablet} {
    width: 100%;
    margin-top: -10%;
    padding-top: 0;
  }
`;

const InfoText = styled(Text)`
  padding-right: 20%;

  @media ${theme.media.tablet} {
    padding-right: 0;
  }
`;

const LinkedIn = styled(Button)`
  background-color: ${theme.colors.bg};
  border: 2px solid ${theme.colors.mainFonts};
`;
