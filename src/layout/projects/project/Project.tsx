import styled from "styled-components";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Text } from "../../../components/text/Text";
import { theme } from "../../../assets/styles/Theme";
import { Button } from "../../../components/button/Button";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;

}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjInfo>
                <Title>{props.title}</Title>
                <ProjText>{props.text}</ProjText>
                <Link as="a">View Project</Link>
            </ProjInfo>
            <Photo src={props.src} alt="Project cover" />
        </StyledProject>

    );
};

const StyledProject = styled.div`
    display: flex;
    border-radius: 24px;
    overflow: hidden;
    height: 33%;
    max-height: 60vh;

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
    }
`;

const ProjInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${theme.colors.bgProj};
    padding: 0 20px 10px 20px;
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
`;