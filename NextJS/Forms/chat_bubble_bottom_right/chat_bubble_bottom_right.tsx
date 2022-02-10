import React, { useState, useRef } from "react";
import { BlurrLayer, ChatInputContent, ChatButton, CloseMenu, OrangeButton } from "./chat.styled";
const Chat = () => {
  const [openChatState, setopenChatState] = useState<boolean | JSX.Element>(
    false
  );

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const openChat = () => {
    // =========== HANDLE SEND EMAIL
    const handleSendEmail = async () => {
      if (name.current && email.current && message.current) {
        const msg = {
          email: email.current.value,
          name: name.current.value,
          message: message.current.value,
        };
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(msg),
        });
      }
      setopenChatState(false);
    };

    setopenChatState(
      <>
        <BlurrLayer></BlurrLayer>
        <ChatInputContent>
          <CloseMenu
            onClick={() => setopenChatState(false)}
            style={{
              top: "1rem",
              right: "1rem",
              width: "3rem",
              height: "3rem",
            }}
          />
          <input type='email' maxLength={150} placeholder='Email' ref={email} />
          <input type='text' maxLength={150} placeholder='Name' ref={name} />
          <textarea
            placeholder={"How can we help? 😊"}
            maxLength={500}
            ref={message}
          ></textarea>
          <OrangeButton
            style={{ borderWidth: "3px" }}
            onClick={handleSendEmail}
          >
            SEND
          </OrangeButton>
        </ChatInputContent>
      </>
    );
  };
  return (
    <>
      {openChatState}
      <ChatButton onClick={openChat} />
    </>
  );
};

export default Chat;