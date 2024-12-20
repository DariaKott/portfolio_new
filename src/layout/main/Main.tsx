import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Text } from "../../components/text/Text";
import photo from "../../assets/images/photo/photo_header.webp"
import { theme } from "../../assets/styles/Theme";
import { Container } from "../../components/Container";

export const Main = () => {
    return (
            <section>
                <Container>
                    <FlexWrapper justify="space-between">
                        <Info>
                            <StyledH1>Frontend Developer</StyledH1>
                            <StyledHello>Hello, my name is Daria Kotelnikova</StyledHello>
                            <InfoText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</InfoText>
                            <Button>Projects</Button>
                            <LinkedIn>LinkedIn</LinkedIn>
                        </Info>
                        <div>
                            <img src={photo} alt="" aria-hidden="true" />
                        </div>
                    </FlexWrapper>
                </Container>
            </section>

    );
};

const StyledH1 = styled.h1`
    color: #FDC435;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
`;

const StyledHello = styled.div`
    color: #333333;
    font-size: 64px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 5% 0;
`;

const Info = styled.div`
    width: 50%;
    padding: 20px 0 20px 0;
`;

const InfoText = styled(Text)`
padding-right: 20%;
font-size: 24px;
`;

const LinkedIn = styled(Button)`
  background-color: ${theme.colors.bg};
  border: 2px solid ${theme.colors.mainFonts};
`;