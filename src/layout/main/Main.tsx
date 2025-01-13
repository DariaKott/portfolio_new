import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Text } from "../../components/text/Text";
import photo from "../../assets/images/photo/photo_header.webp"
import { theme } from "../../assets/styles/Theme";
import { Container } from "../../components/Container";
import { PhotoWithMask } from "../../components/maskedPhoto/PhotoWithMask";
import { font } from "../../assets/styles/Common";

export const Main = () => {
    return (
            <StyledMain>
                <Container>
                    <FlexWrapperMain justify="space-between">
                        <Info>
                            <StyledH1>Frontend Developer</StyledH1>
                            <StyledHello  id={"about"}>Hello, <span>my name is</span> <span>Daria Kotelnikova</span></StyledHello>
                            <InfoText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</InfoText>
                            <Button>Projects</Button>
                            <LinkedIn>LinkedIn</LinkedIn>
                        </Info>
                        < PhotoWithMask/>
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
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
`;

const StyledHello = styled.div`

    ${font( {family: 'Roboto', weight: 700, Fmax: 64, Fmin: 36, lineHeight: 1.5, color: theme.colors.hello})};
    
    padding: 50px 0;

    span {
        white-space: nowrap;
    }

`;

const Info = styled.div`
    width: 40%;
    padding: 20px 0 20px 0;
    z-index: 999;

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