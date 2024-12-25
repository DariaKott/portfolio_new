import styled, { css } from "styled-components";
import { theme } from "../../assets/styles/Theme";

export const MobileMenu = () => {
    return (
    <StyledMobileMenu>
        <BurgerButton isOpen={true}>
            <span></span>
        </BurgerButton>

        <MobileMenuWrapper isOpen={true}>
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
        </MobileMenuWrapper>

    </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 500;
    display: none;
    /* padding-right: 20px;
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
    } */

    @media ${theme.media.mobile} {
        display: block;
    }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
    border: none;
    background-color: inherit;
    z-index: 9999;

    span {
        display: block;
        width: 18px;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.mainFonts};
        position: absolute;
        left: 0;
        bottom: 0;

        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: ${theme.colors.mainFonts};
            position: absolute;
            transform: translateY(-6px);
        }

        &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: ${theme.colors.mainFonts};
            position: absolute;
            transform: translateY(6px);
        }
    }
`;

const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.colors.bg};
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    }
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding-top: 20px;
        list-style: none;

        a {
            display: inline-block;
            text-decoration: none;
            color: #25282B;
        }
}
`;
