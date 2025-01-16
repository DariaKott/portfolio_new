import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../assets/styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
    return (
       
            <StyledHeader>
                <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Name onClick={scroll.scrollToTop}>Daria Kotelnikova</Name>
                    <MobileMenu></MobileMenu>
                    <Menu/>
                </FlexWrapper>
                </Container>
            </StyledHeader>
    );
}

const StyledHeader = styled.header`
  color: ${theme.colors.mainFonts};
  padding: 20px 0 20px 0;


  position: fixed;
  background-color: rgba(249, 250, 255, 0.5);
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

`;

const Name = styled.a`
    font-family: 'Comfortaa', sans-serif;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
`;

