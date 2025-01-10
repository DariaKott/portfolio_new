import { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/styles/Theme";

export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen)};


    return (
    <StyledMobileMenu>
        <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
            <span></span>
        </BurgerButton>

        <MobileMenuPopup isOpen={menuIsOpen}>
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
        </MobileMenuPopup>

    </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 500;
    display: none;

    @media ${theme.media.mobile} {
        display: block;
    }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
    width: 24px;
    height: 24px;
    border: none;
    background-color: inherit;
    z-index: 9999;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        position: fixed;
        top: 20px;
        right: 20px;
        `}

    span {
        display: block;
        width: 18px;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.mainFonts};
        position: absolute;
        /* left: 0;
        bottom: 0; */

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color:  rgba(249, 250, 255, 0); 
        `}



        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: ${theme.colors.mainFonts};
            position: absolute;
            transform: translateY(-6px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
            `}
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

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
            `}
        }
    }
`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(249, 250, 255, 0.95);
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
