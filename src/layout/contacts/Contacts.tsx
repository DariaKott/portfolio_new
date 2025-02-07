import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { BlockTitle } from "../../components/title/BlockTitle";
import { Container } from "../../components/Container";
import { theme } from "../../assets/styles/Theme";
import { ElementRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const form = useRef<ElementRef<"form">>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
          form.current?.reset();
          setTimeout(() => setIsSent(false), 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <StyledContacts id={"contacts"}>
      <Container>
        <BlockTitle title="Contact me" />
        <StyledForm ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <Field
            required
            type="text"
            id="name"
            name={"name"}
            autoComplete="name"
          />
          <label htmlFor="email">Email</label>
          <Field
            required
            type="email"
            id="email"
            name={"email"}
            autoComplete="email"
          />
          <label htmlFor="message">Message</label>
          <Field
            required
            as="textarea"
            id="message"
            name={"message"}
            autoComplete="off"
          />
          <Button type="submit">Send</Button>
        </StyledForm>
      </Container>
      {isSent && <SuccessMessage>Your message has been sent!</SuccessMessage>}
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 70vh;
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
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    align-self: flex-start;
    margin-bottom: -10px;
  }

  textarea {
    resize: none;
    height: 160px;
    padding-top: 10px;
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

// const SuccessMessage = styled.p`
//   color: green;
//   text-align: center;
//   font-family: "Nunito", sans-serif;
//   font-weight: 600;
//   font-size: 16px;
// `;

const SuccessMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${theme.animations.transition};
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 18px;
  z-index: 1000;
  text-align: center;
`;
