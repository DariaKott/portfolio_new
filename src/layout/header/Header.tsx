import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <div>Daria Kotelnikova</div>
            <Menu/>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #25282B;
  padding-left: 10px;
  padding-right: 10px;

`;

