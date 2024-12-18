import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { BlockTitle } from "../../components/title/BlockTitle";
import { theme } from "../../assets/styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
        <BlockTitle title="Contact me"/>
        <StyledForm action="submit">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" />
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message"/>
            <Button type="submit">Send</Button>
        </StyledForm>
        </StyledContacts>

    );
};

const StyledContacts = styled.section`
 // min-height: 50vh;
 padding-bottom: 30px;
`;

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    label {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 16px;
        align-self: flex-start;
        margin-bottom: -10px;
    }

    textarea {
        resize: none;
        height: 160px;


    }

    button {
        align-self: flex-end;
    }
`;

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.bgProj};
    border: 1px solid ${theme.colors.formBord};
    border-radius: 8px;
    height: 40px;
    padding: 4px;

    &:focus-visible {
            outline: 1px solid ${theme.colors.accent};
        }
`;