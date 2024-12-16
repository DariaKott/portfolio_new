import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";

type TitlePropsType = {
    title: string
}

export const BlockTitle = (props: TitlePropsType) => {
    return (
        <StyledTitle>{props.title}</StyledTitle>
    )

};

const StyledTitle = styled.h2`
    text-align: center; 
    font-family: 'Playfair Display', 'Times New Roman', Times, serif;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 80px;

    ::after {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.accent};
        width: 100px;
        height: 4px;
        border-radius: 2px;
    }
`

