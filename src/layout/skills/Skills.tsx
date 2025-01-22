import { useState } from "react";
import { BlockTitle } from "../../components/title/BlockTitle";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { SkillItems } from "./SkillItems";
import { Container } from "../../components/Container";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import { theme } from "../../assets/styles/Theme";
import { font } from "../../assets/styles/Common";

const iconIdArray = [
    { id: 'vscode_icon', title: 'Visual Studio Code' },
    { id: 'js_icon', title: 'JavaScript' },
    { id: 'css3_icon', title: 'CSS3' },
    { id: 'html5_icon', title: 'HTML5' },
    { id: 'github_icon', title: 'GitHub' },
    { id: 'git_icon', title: 'Git' },
    { id: 'react_icon', title: 'React' },
    { id: 'sass_icon', title: 'SASS' },
];

export const Skills = () => {

    const [isHoverd, setIsHovered] = useState(false);

    return (
        <section>
            <Container>
                <BlockTitle title="Skills"/>
                <SkillsWrapper 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                    <FlexWrapper wrap="wrap" justify="space-between">
                        <SkillItems skillItems={iconIdArray}/>
                    </FlexWrapper>
                    {isHoverd && (
                        <TextOverlay>
                            <Typewriter
                                options={{
                                strings: [
                                `I am proficient in: <br/> HTML (HTML5),<br/> CSS (CSS3, SCSS),<br/> Javascript (ES6),<br/> React,<br/> as well as Git & GitHub`],
                                autoStart: true,
                                loop: false,
                                }}
                            />
                        </TextOverlay>
                    )}
                </SkillsWrapper>
            </Container>
        </section>
    );
};

const TextOverlay = styled.div`
    ${font( {family:"'Raleway', sans-serif", weight: 500, Fmax: 24, Fmin: 18, lineHeight: 1.3, color: theme.colors.mainFonts})};
    
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
`;

const SkillsWrapper = styled.div`

position: relative;
overflow: hidden;

padding-top: 30px;

/* &::before {
    content: "I have a solid foundation in HTML, CSS (including SCSS), and JavaScript, with proficiency in modern web standards such as HTML5 and ES6. I am experienced in using Git and GitHub for version control and collaboration. My primary framework of choice is React, which I leverage for building dynamic and responsive user interfaces. Additionally, I work efficiently with Visual Studio Code, enhancing my development workflow.";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(130, 130, 130, 0.9);
    border-radius: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(180deg);
    transform: rotateY(90deg); 
    transform-origin: center; /* Ось вращения в центре */
   // transition: transform 0.6s ease; /* Анимация плавного вращения */
   // opacity: 0; /* Изначально невидим */
   // pointer-events: none; /* Чтобы текст не блокировал иконку */
//}

//&:hover::before {
    /* transform: rotateY(360deg);  */
  //  transform: rotateY(0deg); 
    /* При наведении возвращаем в исходное состояние */
    //opacity: 1; /* Делаем видимым */
   // } */


`;

