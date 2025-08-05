import { BlockTitle } from "../../components/title/BlockTitle";
import { Project } from "./project/Project";
import { Container } from "../../components/Container";
import Proj1Img from "../../assets/images/photo/ProjWordsApp2.png";
import styled from "styled-components";
import MontelloraVideo from "../../assets/projects/MontelloraDemo.mp4";
import MontelloraFallback from "../../assets/projects/MontelloraFallback.png";

export const Projects = () => {
  return (
    <section id={"projects"}>
      <Container>
        <BlockTitle title="Projects" />
        <ProjectWrapper>
          <Project
            title={"Serbian Words App"}
            text={
              "I created this SPA for learnig Serbian words with Russian translation. Technologies was used - React"
            }
            src={Proj1Img}
            link="https://dariakott.github.io/serbian-words-app/"
          />
          <Project
            title="Montellora Landing Page"
            text="Example landing page. I made this page as a test task for a vacancy by their design. Here I focused on adaptivity across screen sizes. Content was created by me and AI tools."
            videoSrc={MontelloraVideo}
            src={MontelloraFallback}
            link="https://dariakott.github.io/landing_test_task/"
          />
          {/* <Project title={"Project 2"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example. order to show how to create an interface in Figma using a portfolio as an example."} src={Proj2Img}/>
                    <Project title={"Project 3"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} src={Proj3Img}/> */}
        </ProjectWrapper>
      </Container>
    </section>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
  justify-content: stretch;
`;
