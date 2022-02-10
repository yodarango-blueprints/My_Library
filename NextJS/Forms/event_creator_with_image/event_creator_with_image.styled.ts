import styled from "styled-components";

export const AddEventWraper = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding-top: 8rem;
  h1 {
    color: var(--primary-color);
    font-size: 3rem;
    font-family: var(--semi-bold-font);
    letter-spacing: 2px;
    width: 100%;
    text-align: center;
    margin: var(--small-spacing-mobile);
  }
  p {
    text-align: center;
    width: 90%;
    margin: auto;
  }
`;

export const EventItem = styled.section`
  width: 100%;
  margin: var(--large-spacing-mobile) auto;
  background-color: var(--accent-color);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, auto);
  div {
    width: 90%;
    height: 80vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-column: 1/2;
    grid-row: 1/2;
    margin: var(--small-spacing-mobile) auto;
  }
  p {
    width: 90%;
    margin: var(--small-spacing-mobile) auto;
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: var(--secondary-color);
  }
  label {
    background-color: transparent;
    border: 1px solid var(--third-color);
    width: 90%;
    padding: 0.8rem 0;
    max-height: 4.5rem;
    color: var(--third-color);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--small-spacing-mobile) auto;
    font-size: var(--text-size-font-mobile);
    grid-column: 1/2;
    grid-row: 3/4;
    &:hover {
      background-color: var(--third-color);
      color: var(--accent-color);
      cursor: pointer;
      transition: 200ms;
    }
  }
  input[type="file"] {
    display: none;
  }
  input {
    background-color: white;
    padding: 1rem 0.5rem;
    width: 90%;
    height: 4rem;
    font-size: var(--text-size-font-mobile);
    color: var(--primary-color);
    font-family: var(--main-font);
    margin: var(--small-spacing-mobile) auto;
    border: none;
  }
  input[type="text"] {
    grid-column: 1/2;
    grid-row: 4/5;
  }
  input[type="date"] {
    grid-column: 1/2;
    grid-row: 5/6;
  }
  textarea {
    background-color: white;
    padding: 1rem 0.5rem;
    width: 90%;
    height: 10rem;
    resize: none;
    font-size: var(--text-size-font-mobile);
    color: var(--primary-color);
    font-family: var(--main-font);
    margin: var(--small-spacing-mobile) auto;
    border: none;
    grid-column: 1/2;
    grid-row: 6/7;
  }
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-column: 1/2;
    grid-row: 7/8;
    button {
      width: 100%;
    }
    button:nth-child(1) {
      &:hover {
        background-color: green;
        color: var(--accent-color) !important;
      }
    }
    button:nth-child(2) {
      &:hover {
        background-color: red;
        color: var(--accent-color) !important;
      }
    }
  }
  @media (min-width: 700px) {
    margin: var(--large-spacing-ipad) auto;
    div {
      margin: var(--small-spacing-ipad) auto;
    }
    input {
      font-size: var(--text-size-font-ipad);
      margin: var(--small-spacing-ipad) auto;
    }
    textarea {
      font-size: var(--text-size-font-ipad);
      margin: var(--small-spacing-ipad) auto;
    }
    section {
      button {
        width: 40%;
      }
      button:nth-child(1) {
        &:hover {
          background-color: green;
          color: var(--accent-color) !important;
        }
      }
      button:nth-child(2) {
        &:hover {
          background-color: red;
          color: var(--accent-color) !important;
        }
      }
    }
  }
  @media (min-width: 800px) {
    margin: var(--large-spacing-desktop) auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(5, auto);
    div {
      width: 90%;
      height: 90%;
      grid-row: 1/4;
      grid-column: 2/3;
      margin: var(--small-spacing-desktop) auto 0;
    }
    p {
      grid-column: 2/3;
      grid-row: 4/5;
    }
    label {
      margin: var(--small-spacing-desktop) auto;
      font-size: var(--text-size-font-desktop);
      grid-column: 2/3;
      grid-row: 5/6;
    }
    input {
      font-size: var(--text-size-font-desktop);
      margin: var(--small-spacing-desktop) auto;
    }
    input[type="text"] {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    input[type="date"] {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    textarea {
      background-color: white;
      padding: 1rem 0.5rem;
      width: 90%;
      height: 15rem;
      font-size: var(--text-size-font-desktop);
      margin: var(--small-spacing-desktop) auto;
      grid-column: 1/2;
      grid-row: 3/4;
    }
    section {
      grid-column: 1/2;
      grid-row: 4/5;
      button {
        width: 40%;
      }
    }
  }
`;

export const AddEventButton = styled.button`
  width: 80%;
  margin: var(--large-spacing-mobile) auto;
  background-color: var(--third-color);
  padding: 1rem 0.5rem;
  color: var(--accent-color);
  font-family: var(--main-font);
  font-size: var(--text-size-font-mobile);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.9);
    transition: 300ms ease-in;
  }
  span {
    width: 2rem;
    height: 2rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/assets/images/add-icon.svg");
    margin: 0 var(--small-spacing-mobile) 0 0;
    display: inline-block;
  }
`;

export const SignInPlease = styled.div`
  min-height: 50vh;
  width: 100%;
  padding-top: 10rem;
  color: var(--primary-color);
  font-size: 3rem;
  font-family: var(--semi-bold-font);
  letter-spacing: 2px;
  text-align: center;
  line-height: 2em;
  margin: var(--small-spacing-mobile) 0;
`;

export const WhiteButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--accent-color);
  width: 12rem;
  padding: 0.8rem 0;
  color: var(--accent-color);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--small-spacing-mobile) auto;
  font-size: var(--text-size-font-mobile);
  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
    cursor: pointer;
    transition: 200ms;
  }
`;

export const LoaderWrappaer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  i {
    border: solid #d5d5d5;
    border-width: 0 1px 5px 0;
    display: inline-block;
    padding: 30px;
    transform: rotate(-45deg);
    border-radius: 50%;
    animation: spin 0.5s linear infinite;
    transition-property: transform;
    animation-fill-mode: forwards;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;