import { BlockTitle } from "../../components/title/BlockTitle";
import { Project } from "./project/Project";
import Proj1Img from "../../assets/images/photo/project1.jpeg";
import Proj2Img from "../../assets/images/photo/project2.jpeg";
import Proj3Img from "../../assets/images/photo/project3.jpeg";


export const Projects = () => {
    return (
        <>
        <BlockTitle title="Projects"/>
            <Project title={"Project 1"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} src={Proj1Img}/>
            <Project title={"Project 2"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} src={Proj2Img}/>
            <Project title={"Project 3"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} src={Proj3Img}/>
        </>
    );
};