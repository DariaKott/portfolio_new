import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../assets/styles/Theme";

export const Header = () => {
    return (
       
            <StyledHeader>
                <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Name>Daria Kotelnikova</Name>
                    <MobileMenu></MobileMenu>
                    <Menu/>
                </FlexWrapper>
                </Container>
            </StyledHeader>
    );
}

const StyledHeader = styled.header`
  color: #25282B;
  /* outline: 1px solid green; */
  padding: 20px 0 20px 0;

  /* position: fixed;
  background-color: ${theme.colors.bg};
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; */

`;

const Name = styled.div`
    font-family: 'Comfortaa', sans-serif;
    font-weight: 700;
    font-size: 18px;
`;

