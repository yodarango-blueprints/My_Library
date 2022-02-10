import styled from "styled-components";

export const AllEventsWrapper = styled.section`
  width: 90%;
  max-width: 600px;
  min-height: 50vh;
  margin: var(--large-spacing-mobile) auto;
  @media (min-width: 70px) {
    margin: var(--large-spacing-desktop) auto;
  }
`;

export const SingleEvent = styled.div`
  width: 100%;
  background-color: var(--accent-color);
  display: grid;
  grid-template-columns: calc(100% - 6rem) 3rem 3rem;
  grid-template-rows: auto;
  padding: 0.5rem;
  margin: var(--medium-spacing-mobile) 0;
  p {
    font-family: var(--semi-bold-font);
    font-size: 1rem;
    text-align: left;
    color: var(--primary-color);
  }
  span {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  span:nth-child(1) {
    background-image: url("/assets/images/deleteIcon.svg");
  }
  span:nth-child(2) {
    background-image: url("/assets/images/editIcon.svg");
  }
`;

export const AreYouSureModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  div {
    background-color: var(--accent-color);
    width: 80%;
    max-width: 500px;
    padding: 2rem 0;
    p {
      font-family: var(--semi-bold-font);
      font-size: var(--text-size-font-mobile);
      text-align: center;
      color: var(--primary-color);
      width: 80%;
      margin: var(--medium-spacing-mobile) auto;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      button {
        width: 45%;
      }
    }
  }
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