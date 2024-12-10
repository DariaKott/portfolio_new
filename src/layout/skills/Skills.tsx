import { BlockTitle } from "../../components/title/BlockTitle";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Skills = () => {
    return (
        <section>
            <BlockTitle title="Skills"/>
            <FlexWrapper>
                <Icon iconId="vscode_icon"/>
                <Icon iconId="js_icon"/>
                <Icon iconId="es6_icon"/>
            </FlexWrapper>
        </section>
    );
};