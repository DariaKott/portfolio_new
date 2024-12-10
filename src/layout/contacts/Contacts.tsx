import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { BlockTitle } from "../../components/title/BlockTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
        <BlockTitle title="Contact me"/>
        <StyledForm action="submit">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" placeholder="type your name"/>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" placeholder="type your e-mail"/>
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" placeholder="your message"/>
            <Button type="submit">Send</Button>
        </StyledForm>
        </StyledContacts>

    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`;

const Field = styled.input`
    
`;