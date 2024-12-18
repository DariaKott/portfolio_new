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
    margin: 5% 10%;
    height: 30%;
    border-radius: 24px;
    overflow: hidden;
`;

const ProjInfo = styled.div`
    background-color: ${theme.colors.bgProj};
    padding: 10% 10%;
`;

const Title = styled.h3`
    margin-bottom: 10%;
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
/* justify-content: baseline; */
padding-top: 6px;
`;

const Photo = styled.img`
max-width: 300px;
object-fit: cover;
`;