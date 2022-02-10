import React, { useState } from "react";
import Image from "next/image";
import {
  ImageDescription,
  OurStoryImage,
  OurStoryWrapper,
  TimeLine,
} from "./timeline_with_image.styled";

const OurStory = () => {
  const [spanToFillState, setspanToFillState] = useState<{
    one?: string;
    two?: string;
    three?: string;
    four?: string;
  }>({ one: "#fdb313", two: "", three: "", four: "" });
  const changeTimeLine = (spanNum: string) => {
    spanNum === "one" ? setspanToFillState({ one: "#fdb313" }) : null;
    spanNum === "two" ? setspanToFillState({ two: "#fdb313" }) : null;
    spanNum === "three" ? setspanToFillState({ three: "#fdb313" }) : null;
    spanNum === "four" ? setspanToFillState({ four: "#fdb313" }) : null;
  };

  return (
    <OurStoryWrapper>
      <h2>OUR STORY</h2>
      {spanToFillState.one && (
        <OurStoryImage>
          <Image
            src='/assets/images/constructionImage.png'
            alt='construction image'
            layout='fill'
          />
          <ImageDescription>
            <h3>Title of a 1</h3>
            <p>
              Isum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ImageDescription>
        </OurStoryImage>
      )}
      {spanToFillState.two && (
        <OurStoryImage>
          <Image
            src='/assets/images/our-beliefs-gray-bkg.png'
            alt='construction image'
            layout='fill'
          />
          <ImageDescription>
            <h3>Title of a 2</h3>
            <p>
              Isum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the anged.
            </p>
          </ImageDescription>
        </OurStoryImage>
      )}
      {spanToFillState.three && (
        <OurStoryImage>
          <Image
            src='/assets/images/broWhitley.png'
            alt='construction image'
            layout='fill'
          />
          <ImageDescription>
            <h3>Title of a 3</h3>
            <p>
              Isum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 150t to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </ImageDescription>
        </OurStoryImage>
      )}
      {spanToFillState.four && (
        <OurStoryImage>
          <Image
            src='/assets/images/constructionImage.png'
            alt='construction image'
            layout='fill'
          />
          <ImageDescription>
            <h3>Title of a 4</h3>
            <p>
              ive centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </ImageDescription>
        </OurStoryImage>
      )}
      <TimeLine>
        <div></div>
        <div>
          <span></span>
          <span
            onClick={() => changeTimeLine("one")}
            style={{ backgroundColor: spanToFillState.one }}
          ></span>
          <p>1950</p>
        </div>
        <div>
          <span></span>
          <span
            onClick={() => changeTimeLine("two")}
            style={{ backgroundColor: spanToFillState.two }}
          ></span>
          <p>1983</p>
        </div>
        <div>
          <span></span>
          <span
            onClick={() => changeTimeLine("three")}
            style={{ backgroundColor: spanToFillState.three }}
          ></span>
          <p>2004</p>
        </div>
        <div>
          <span></span>
          <span
            onClick={() => changeTimeLine("four")}
            style={{ backgroundColor: spanToFillState.four }}
          ></span>
          <p>2010</p>
        </div>
      </TimeLine>
    </OurStoryWrapper>
  );
};

export default OurStory;