import { BlockTitle } from "../../components/title/BlockTitle";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { SkillItems } from "./SkillItems";
import { Container } from "../../components/Container";

const iconIdArray = ["vscode_icon", "js_icon", "es6_icon", "html5_icon", "github_icon", "git_icon", "react_icon", "sass_icon"];

export const Skills = () => {
    return (
        <section>
            <Container>
                <BlockTitle title="Skills"/>
                <FlexWrapper wrap="wrap" justify="space-between">
                    <SkillItems skillItems={iconIdArray}/>
                </FlexWrapper>
            </Container>
        </section>
    );
};
