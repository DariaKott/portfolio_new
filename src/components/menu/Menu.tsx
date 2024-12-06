import styled from "styled-components";

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
    ul {
        display: flex;
        gap: 30px;
        list-style: none;

        a {
            text-decoration: none;
            color: #25282B;
        }
    }
`
