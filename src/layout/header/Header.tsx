import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../assets/styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Name>Daria Kotelnikova</Name>
            <Menu/>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #25282B;
  outline: 1px solid green;
  padding: 20px 30px 20px 0;
  font-family: ;
  /* position: fixed;
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

