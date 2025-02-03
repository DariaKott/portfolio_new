import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../assets/styles/Theme";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            // Удаляем обработчик при размонтировании компонента
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
            <StyledGoTopBtn className={showBtn ? "show" : ""} onClick={scroll.scrollToTop} aria-label="Scroll to top">
                <Icon iconId="arrow_up" width="30px" height="25px" title="to top"/>
            </StyledGoTopBtn>

    );
};

const StyledGoTopBtn = styled.button`
position: fixed;
right: 30px;
bottom: 50px;
padding-top: 2px;
border: none;
background-color: ${theme.colors.bgTransp};
border-radius: 50%;
transform: translateY(100px); 
transition: transform 0.3s ease, opacity 0.3s ease;

&.show {
    transform: translateY(0); 
    opacity: 1;
    }

@media (min-width: 1230px) {
    right: calc((100vw - 1230px) / 2 + 30px);
    }
`;