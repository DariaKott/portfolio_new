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
                            <StyledHello>Hello, my name is Daria Kotelnikova</StyledHello>
                            <InfoText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</InfoText>
                            <Button>Projects</Button>
                            <LinkedIn>LinkedIn</LinkedIn>
                        </Info>
                        {/* <div>
                            <img src={photo} alt="" aria-hidden="true" />
                        </div> */}
                        < PhotoWithMask/>
                    </FlexWrapperMain>
                </Container>
            </StyledMain>

    );
};

const StyledMain = styled.section`
    padding-top: 40px;
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

    ${font( {family: 'Roboto', weight: 700, Fmax: 64, Fmin: 42, lineHeight: 1.5, color: theme.colors.hello})};
    padding: 5% 0;

`;

const Info = styled.div`
    width: 40%;
    padding: 20px 0 20px 0;

    @media ${theme.media.tablet} {
        width: 100%;
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