import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";

export const Button = styled.button`
font-family: 'Roboto'; 
font-weight: 500;
font-size: 18px;
line-height: 1.5;
color: ${theme.colors.mainFonts};
background-color: ${theme.colors.accent};
border: none;
width: 115px;
height: 43px;
border-radius: 8px;
box-shadow: none;
margin-top: 4%;
transition: ${theme.animations.transition};

+ button {
    margin-left: 12px;
}

:hover {
    cursor: pointer;
    background-color: ${theme.colors.texts};
}
`;

