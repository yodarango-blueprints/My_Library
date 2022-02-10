import styled from "styled-components";

export const EventsGridWrapper = styled.div`
  width: 90%;
  margin: var(--medium-spacing-mobile) auto;
  padding: 3rem 0;
  h1 {
    width: 100%;
    font-size: 2rem;
    color: var(--primary-color);
    font-family: var(--semi-bold-font);
    margin: var(--medium-spacing-mobile) auto;
    text-align: center;
  }
  @media (min-width: 700px) {
    h1 {
      font-size: 2.5rem;
      margin: var(--medium-spacing-ipad) auto;
    }
  }
`;

export const EventItem = styled.article`
  width: 100%;
  margin: var(--medium-spacing-mobile) auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(5, auto);
  background-color: var(--accent-color);
  padding: 1rem;
  div {
    grid-row: 1/2;
    grid-column: 1/2;
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 90vw;
    max-height: 500px;
    margin: auto;
    img {
      object-fit: cover;
    }
  }
  h2 {
    grid-row: 2/3;
    grid-column: 1/2;
    color: var(--primary-color);
    font-family: var(--semi-bold-font);
    font-size: var(--heading-size-font-mobile);
    width: 100%;
    text-align: center;
    margin: var(--small-spacing-mobile) auto 0;
  }
  h3 {
    grid-row: 3/4;
    grid-column: 1/2;
    color: var(--secondary-color);
    font-family: var(--semi-bold-font);
    font-size: var(--text-size-font-mobile);
    width: 100%;
    text-align: center;
  }
  p {
    grid-row: 4/5;
    grid-column: 1/2;
    display: none;
  }
  @media (min-width: 700px) {
    margin: calc(var(--medium-spacing-ipad) + 1rem) auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(4, auto);
    padding: 1rem;
    div {
      grid-row: 1/5;
      grid-column: 1/2;
      position: relative;
      width: 90%;
      height: 15rem;
      margin: 0;
      img {
        object-fit: cover;
      }
    }
    h2 {
      grid-row: 1/2;
      grid-column: 2/3;
      font-size: var(--heading-size-font-ipad);
      text-align: left;
      margin: var(--small-spacing-ipad) auto 0;
    }
    h3 {
      grid-row: 2/3;
      grid-column: 2/3;
      font-size: var(--text-size-font-ipad);
      text-align: left;
    }
  }
  @media (min-width: 950px) {
    margin: calc(var(--medium-spacing-ipad) + 3rem) auto;
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 3rem;
    background-color: transparent;
    max-width: 1000px;
    div {
      grid-row: 1/5;
      grid-column: 1/2;
      width: 90%;
      height: 100%;
    }
    h2 {
      grid-row: 1/2;
      grid-column: 2/3;
      font-size: var(--heading-size-font-desktop);
      margin: var(--small-spacing-desktop) auto 0;
    }
    h3 {
      grid-row: 2/3;
      grid-column: 2/3;
      font-size: var(--text-size-font-desktop);
    }
    p {
      grid-row: 3/4;
      grid-column: 2/3;
      color: var(--primary-color);
      font-family: var(--main-font);
      font-size: var(--text-size-font-mobile);
      width: 100%;
      text-align: left;
      line-height: 2em;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    a {
      grid-row: 4/5;
      grid-column: 2/3;
    }
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