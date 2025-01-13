import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import Footerbg from "./../../assets/images/footer_yellow.svg";
import { theme } from "../../assets/styles/Theme";
export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <SocialList>
                    <SocialItem>
            <SocialLink>
                            <Icon iconId={"insta_icon"} width="48" height="48"/>
                        </SocialLink> 
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedin_icon"} width="48" height="48"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"email_icon"} width="48" height="48"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Daria Kotelnikova 2024</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-image: url(${Footerbg});

    min-height: 30vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    @media ${theme.media.tablet} {
    height: 200px;
    
    background-size: contain;
    background-position: bottom center;
    }

`;

const SocialList = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

const SocialItem = styled.li`
    list-style: none;

`;

const SocialLink = styled.a`
display: flex;
width: 48px;
height: 48px;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover {
transform: scale(1.2);
}
`;

const Copyright = styled.small`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.texts};
    padding-top: 5%;
`;
