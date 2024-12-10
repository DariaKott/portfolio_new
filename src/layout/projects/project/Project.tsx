import styled from "styled-components";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;

}

export const Project = (props: ProjectPropsType) => {
    return (
        <FlexWrapper>
            <div>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link>View Project</Link>
            </div>
            <Photo src={props.src} alt="Project cover" />
        </FlexWrapper>

    );
};

const Title = styled.h3`
    
`;
 
const Text = styled.p`

`;

const Link = styled.button`

`;

const Photo = styled.img`
max-width: 300px;
object-fit: cover;
`;