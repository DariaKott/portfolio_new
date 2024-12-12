import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"insta_icon"} width="38" height="32"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedin_icon"} width="42" height="32"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"email_icon"} width="42" height="32"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Daria Kotelnikova 2024</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`;

const SocialList = styled.ul`
    display: flex;
`;

const SocialItem = styled.li`
    list-style: none;
`;

const SocialLink = styled.a`
    
`;

const Copyright = styled.small`
    
`;
