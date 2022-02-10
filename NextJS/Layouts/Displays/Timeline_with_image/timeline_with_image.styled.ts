import styled from "styled-components";

export const OurStoryWrapper = styled.section`
  width: 90%;
  max-width: 600px;
  margin: auto;
  padding: 6rem 0;
  h2 {
    font-size: calc(var(--heading-size-font-mobile) + 1.5rem);
    font-family: var(--semi-bold-font);
    color: var(--primary-color);
    text-align: center;
    width: 100%;
    margin: var(--medium-spacing-mobile) 0;
  }
  @media (min-width: 700px) {
    padding: 7rem 0 8rem;
    h2 {
      font-size: calc(var(--heading-size-font-ipad) + 1.5rem);
      margin: var(--medium-spacing-ipad) 0;
    }
  }
  @media (min-width: 950px) {
    padding: 8rem 0 8rem;
    max-width: 1000px;
    h2 {
      font-size: calc(var(--heading-size-font-desktop) + 2rem);
      margin: var(--medium-spacing-desktop) 0;
    }
  }
`;

export const OurStoryImage = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    object-fit: cover;
  }
  @media (min-width: 700px) {
    margin: calc(var(--large-spacing-ipad) + 1rem) auto;
  }
  @media (min-width: 950px) {
    height: 32rem;
    margin: calc(var(--large-spacing-desktop) + 1rem) auto;
  }
`;

export const ImageDescription = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  z-index: 2;
  top: 0;
  left: 0;
  color: var(--accent-color);
  background-image: linear-gradient(90deg, var(--primary-color), #001d5030);
  padding: var(--medium-spacing-mobile) 0 0;
  h3 {
    width: 90%;
    margin: var(--small-spacing-mobile) auto;
    font-family: var(--semi-bold-font);
    font-size: var(--heading-size-font-mobile);
    text-align: left;
  }
  p {
    width: 90%;
    margin: var(--small-spacing-mobile) auto;
    font-family: var(--main--font);
    font-size: var(--text-size-font-mobile);
    text-align: left;
  }
  @media (min-width: 700px) {
    padding: var(--medium-spacing-ipad) 0 0;
    h3 {
      margin: var(--small-spacing-ipad) auto;
      font-size: var(--heading-size-font-ipad);
    }
    p {
      margin: var(--small-spacing-ipad) auto;
      font-size: var(--text-size-font-ipad);
    }
  }
  @media (min-width: 950px) {
    padding: var(--medium-spacing-desktop) 0 0;
    h3 {
      width: 60%;
      margin: var(--small-spacing-desktop) auto var(--small-spacing-desktop)
        var(--large-spacing-desktop);
      font-size: var(--heading-size-font-desktop);
    }
    p {
      width: 60%;
      margin: var(--small-spacing-desktop) auto var(--small-spacing-desktop)
        var(--large-spacing-desktop);
      font-size: var(--text-size-font-desktop);
    }
  }
`;

export const TimeLine = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  margin: var(--medium-spacing-mobile) 0;
  div {
    background-color: var(--secondary-color);
    span:nth-child(2) {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      border: solid 0.3rem var(--secondary-color);
      display: block;
      position: absolute;
    }
    p {
      color: var(--primary-color);
      font-size: 0.9rem;
      position: absolute;
    }
  }
  // straight line
  div:nth-child(1) {
    width: 100%;
    height: 0.5rem;
    top: calc(50% - 0.25rem);
    position: absolute;
    border-radius: 0.5rem;
  }
  // first fork
  div:nth-child(2) {
    position: absolute;
    width: 3rem;
    height: 2rem;
    background-color: transparent;
    top: 0.3rem;
    left: 12.5%;
    span:nth-child(1) {
      width: 3rem;
      height: 2rem;
      display: block;
      transform: skew(-25deg, 0);
      border-top: solid 0.5rem var(--secondary-color);
      border-left: solid 0.5rem var(--secondary-color);
    }
    span:nth-child(2) {
      top: -0.5rem;
      left: 3.2rem;
    }
    p {
      top: 0.6rem;
      left: 3rem;
    }
  }
  // second fork
  div:nth-child(3) {
    position: absolute;
    width: 3rem;
    height: 2rem;
    background-color: transparent;
    bottom: 0.3rem;
    left: 31.25%;
    span:nth-child(1) {
      width: 3rem;
      height: 2rem;
      display: block;
      transform: skew(25deg, 0);
      border-bottom: solid 0.5rem var(--secondary-color);
      border-left: solid 0.5rem var(--secondary-color);
    }
    span:nth-child(2) {
      bottom: -0.5rem;
      left: 3.2rem;
      cursor: pointer;
    }
    p {
      top: 2rem;
      left: 3rem;
    }
  }
  // third fork
  div:nth-child(4) {
    position: absolute;
    width: 3rem;
    height: 2rem;
    background-color: transparent;
    top: 0.3rem;
    left: 50%;
    span:nth-child(1) {
      width: 3rem;
      height: 2rem;
      display: block;
      transform: skew(-25deg, 0);
      border-top: solid 0.5rem var(--secondary-color);
      border-left: solid 0.5rem var(--secondary-color);
    }
    span:nth-child(2) {
      top: -0.5rem;
      left: 3.2rem;
    }
    p {
      top: 0.6rem;
      left: 3rem;
    }
  }
  // fourth
  div:nth-child(5) {
    position: absolute;
    width: 3rem;
    height: 2rem;
    background-color: transparent;
    bottom: 0.3rem;
    left: 68.75%;
    span:nth-child(1) {
      width: 3rem;
      height: 2rem;
      display: block;
      transform: skew(25deg, 0);
      border-bottom: solid 0.5rem var(--secondary-color);
      border-left: solid 0.5rem var(--secondary-color);
    }
    span:nth-child(2) {
      bottom: -0.5rem;
      left: 3.2rem;
    }
    p {
      top: 2rem;
      left: 3rem;
    }
  }
  @media (min-width: 700px) {
    height: 6rem;
    margin: var(--medium-spacing-ipad) 0;
    div {
      span:nth-child(2) {
        width: 1.7rem;
        height: 1.7rem;
        border: solid 0.4rem var(--secondary-color);
      }
      p {
        font-size: 1rem;
      }
    }
    // straight line
    div:nth-child(1) {
      height: 0.7rem;
      top: calc(50% - 0.35rem);
    }
    // first fork
    div:nth-child(2) {
      position: absolute;
      width: 3.5rem;
      height: 3rem;
      top: 0.3rem;
      span:nth-child(1) {
        width: 3.5rem;
        height: 3rem;
        display: block;
        transform: skew(-25deg, 0);
      }
      span:nth-child(2) {
        left: 3.7rem;
      }
      p {
        top: 0.8rem;
      }
    }
    // second fork
    div:nth-child(3) {
      position: absolute;
      width: 3.5rem;
      height: 3rem;
      span:nth-child(1) {
        width: 3.5rem;
        height: 3rem;
      }
      span:nth-child(2) {
        left: 3.7rem;
      }
      p {
        top: 3rem;
      }
    }
    // third fork
    div:nth-child(4) {
      width: 3.5rem;
      height: 3rem;
      span:nth-child(1) {
        width: 3.5rem;
        height: 3rem;
      }
      span:nth-child(2) {
        left: 3.7rem;
      }
      p {
        top: 0.8rem;
      }
    }
    // fourth
    div:nth-child(5) {
      position: absolute;
      width: 3.5rem;
      height: 3rem;
      span:nth-child(1) {
        width: 3.5rem;
        height: 3rem;
      }
      span:nth-child(2) {
        left: 3.7rem;
      }
      p {
        top: 3rem;
      }
    }
  }
  @media (min-width: 950px) {
    height: 7rem;
    margin: var(--medium-spacing-desktop) 0;
    div {
      span:nth-child(2) {
        width: 2rem;
        height: 2rem;
        border: solid 0.4rem var(--secondary-color);
      }
      p {
        font-size: 1.2rem;
      }
    }
    // straight line
    div:nth-child(1) {
      height: 0.7rem;
      top: calc(50% - 0.35rem);
    }
    // first fork
    div:nth-child(2) {
      width: 4rem;
      height: 3.5rem;
      top: 0.3rem;
      span:nth-child(1) {
        width: 4rem;
        height: 3.5rem;
        transform: skew(-30deg, 0);
      }
      span:nth-child(2) {
        left: 4.5rem;
        top: -0.6rem;
      }
      p {
        top: 1.3rem;
        left: 4rem;
      }
    }
    // second fork
    div:nth-child(3) {
      width: 4rem;
      height: 3.5rem;
      span:nth-child(1) {
        width: 4rem;
        height: 3.5rem;
        transform: skew(30deg, 0);
      }
      span:nth-child(2) {
        left: 4.5rem;
        bottom: -0.7rem;
      }
      p {
        top: 4rem;
        left: 4rem;
      }
    }
    // third fork
    div:nth-child(4) {
      height: 3.5rem;
      top: 0.3rem;
      span:nth-child(1) {
        width: 4rem;
        height: 3.5rem;
        transform: skew(-30deg, 0);
      }
      span:nth-child(2) {
        left: 4.5rem;
        top: -0.6rem;
      }
      p {
        top: 1.3rem;
        left: 4rem;
      }
    }
    // fourth
    div:nth-child(5) {
      width: 4rem;
      height: 3.5rem;
      span:nth-child(1) {
        width: 4rem;
        height: 3.5rem;
        transform: skew(30deg, 0);
      }
      span:nth-child(2) {
        left: 4.5rem;
        bottom: -0.7rem;
      }
      p {
        top: 4rem;
        left: 4rem;
      }
    }
  }
`;