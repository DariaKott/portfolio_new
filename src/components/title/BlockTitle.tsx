import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";
import { font } from "../../assets/styles/Common";

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
    ${font( {family: "'Playfair Display', 'Times New Roman', Times, serif", weight: 700, Fmax: 48, Fmin: 36, lineHeight: 1.5, color: theme.colors.mainFonts})};
    margin-bottom: 80px;

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.accent};
        width: 100px;
        height: 4px;
        border-radius: 2px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -14px;
    }
`

