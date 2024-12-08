import styled from "styled-components";

type TitlePropsType = {
    title: string
}

export const BlockTitle = (props: TitlePropsType) => {
    return (
        <StyledTitle>{props.title}</StyledTitle>
    )

};

const StyledTitle = styled.h2`
    
`

