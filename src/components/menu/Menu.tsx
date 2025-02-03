import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";
import { MenuItems } from "./MenuItems";

export const Menu = () => {

    return (
    <StyledMenu>
        <MenuItems/>
    </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 500;
    padding-right: 10px;
    ul {
        display: flex;
        gap: 30px;
        list-style: none;

        a {
            display: inline-block;
            text-decoration: none;
            color: #25282B;
            transition: ${theme.animations.transition};

            &:hover, &.active {
                color: ${theme.colors.hello};
                transform: scale(1.3);
                cursor: pointer;
            }
        }
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`
