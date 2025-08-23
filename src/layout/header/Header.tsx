import styled from "styled-components";
import { useState, useEffect } from "react";
import { Menu } from "../../components/menu/Menu";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../assets/styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader className={scrolled ? "scrolled" : ""}>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Name onClick={scroll.scrollToTop}>Daria Kotelnikova</Name>
          <MobileMenu></MobileMenu>
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  color: ${theme.colors.mainFonts};
  padding: 20px 0 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: transparent;

  transition: ${theme.animations.transition};

  &.scrolled {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background-color: rgba(249, 250, 255, 0.5);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.a`
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;
