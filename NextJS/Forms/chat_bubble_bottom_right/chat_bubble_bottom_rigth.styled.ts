import styled from "styled-components";

export const BlurrLayer = styled.div`
  width: 90%;
  max-width: 600px;
  height: 80vh;
  max-height: 700px;
  position: fixed;
  top: 8vh;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 4;
  //background-color: #f2f2f236;
  //box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  filter: blur(5px);
  @media (min-width: 950px) {
    max-width: 420px;
    height: 500px;
    top: calc(100vh - (500px + 2rem));
    bottom: 5rem;
    margin: 0;
    left: calc(100vw - (420px + 2rem));
  }
`;

export const ChatInputContent = styled.div`
  width: 90%;
  max-width: 600px;
  height: 80vh;
  max-height: 500px;
  position: fixed;
  top: calc(8vh + 7rem);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  z-index: 4;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 2000px #11b5f083;
  padding: 5rem 0 1rem;
  input {
    width: 90%;
    display: block;
    margin: var(--small-spacing-mobile) auto;
    height: 3rem;
    background-color: var(--accent-color);
    color: var(--primary-color);
    font-size: var(--text-size-font-mobile);
    font-family: var(--main-font);
    padding: 0 1rem;
    outline: none;
    border: none;
    &::placeholder {
      color: #8a8a8a;
    }
  }
  textarea {
    width: 90%;
    margin: var(--small-spacing-mobile) auto;
    color: var(--primary-color);
    background-color: var(--accent-color);
    font-size: var(--text-size-font-mobile);
    font-family: var(--main-font);
    padding: 1rem;
    height: 50%;
    resize: none;
    outline: none;
    border: none;
    display: block;
    @media (max-height: 600px) {
      height: 30%;
    }
    @media (max-height: 950px) {
      height: 42%;
    }
  }
  span {
    width: 2rem;
    height: 2rem;
    display: block;
    border-radius: 50%;
    background-image: url("/assets/images/full-logo.png");
    background-position: center;
    background-size: cover;
  }
  button {
    z-index: 4;
  }
  @media (min-width: 700px) {
    max-height: 600px;
    padding: 5rem 0 2rem;
  }
  @media (min-width: 950px) {
    max-width: 420px;
    height: 500px;
    top: calc(100vh - 550px);
    bottom: 5rem;
    margin: 0;
    left: calc(100vw - (420px + 2rem));
  }
`;

export const ChatButton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--random-color);
  background-image: url("/assets/images/chatIcon.svg");
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 4;
  cursor: pointer;
`;

export const CloseMenu = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid var(--third-color);
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-image: url("/assets/images/close-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  &:hover {
    transform: scale(0.9);
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;

export const OrangeButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--third-color);
  width: 12rem;
  padding: 0.8rem 0;
  color: var(--third-color);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--small-spacing-mobile) auto;
  font-size: var(--text-size-font-mobile);
  &:hover {
    background-color: var(--third-color);
    color: var(--accent-color);
    cursor: pointer;
    transition: 200ms;
  }
`;