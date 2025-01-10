import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";

export const Menu = () => {
    return (
    <StyledMenu>
        <ul>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Projects</a>
                </li>
            <li>
                <a href="">Contacts</a>
                </li>
        </ul>
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
            :hover {
                color: ${theme.colors.hello};
                transform: scale(1.3);
            }
        }
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`
