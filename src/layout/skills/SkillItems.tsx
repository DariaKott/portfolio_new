import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../assets/styles/Theme";

type IconItem = {
    id: string;
    title: string;
}

type SkillPropsType = {
    skillItems: IconItem[];
}

export const SkillItems = (props: SkillPropsType) => {
    return (
        <>
            {props.skillItems.map((item) => (
                <Skill key={item.id}>
                    <Icon iconId={item.id} title={item.title} width="100px" height="100px"/>
                </Skill>
            ))}
        </>
    );
}

const Skill = styled.div`
    display: flex;
    width: 25%;
    margin-bottom: 5%;
    justify-content: center;
    align-items: center;


    @media ${theme.media.mobile} {
        width: 50%;
    }
    
`