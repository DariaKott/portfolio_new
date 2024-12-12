import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import photo from "../../assets/images/photo/photo_header.webp"

export const Main = () => {
    return (
        <main>
            <FlexWrapper>
                <div>
                    <StyledH1>Frontend Developer</StyledH1>
                    <StyledHello>Hello, my name is Daria Kotelnikova</StyledHello>
                    <div>Short text with details about you, what you do or your professional career. You can add more information on the about page.</div>
                    <Button>Projects</Button>
                    <Button>LinkedIn</Button>
                </div>
                <div>
                    <img src={photo} alt="" aria-hidden="true" />
                </div>
            </FlexWrapper>

        </main>

    );
};

const StyledH1 = styled.h1`
    color: #FDC435;
    font-size: 20px;
    text-transform: uppercase;
`;

const StyledHello = styled.span`
    color: #333333;
    font-size: 64px;
    font-family: 'Roboto';
    font-weight: 700;
`;