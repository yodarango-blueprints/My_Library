// core
import React, { useState } from "react";
import Link from "next/link";

// style
import VerticalTabStyles from "../VerticalTab.module.css";

//helpers
import ministers from "../ministers";

const AboutTeam = () => {
  //   =======================   UPDATE HTE CURRENT MINISTER INFO SELECTED BY HTE USER  =============== //
  const [newMinisterState, setnewMinisterState] = useState<{
    photo: string | undefined;
    title: string | undefined;
    role: string | undefined;
    desc: JSX.Element;
  }>({
    photo: ministers[0].photo,
    title: ministers[0].title,
    role: ministers[0].role,
    desc: (
      <>
        {ministers[0].description.breakOne}
        <br />
        <br />
        {ministers[0].description.breakTwo}
        <br />
        <br />
        {ministers[0].description.breakThree}
        <br />
        <br />
        {ministers[0].description.breakFour}
        <br />
        <br />
        {ministers[0].description.breakFive}
      </>
    ),
  });

  // =============    OPEN MINISTER DROPDOWN   ================ //
  const closeMinisterDropDown = () => {
    setMinistersDropDownState({
      show: false,
      newFunc: openMinisterDropDown,
    });
  };

  const openMinisterDropDown = () => {
    setMinistersDropDownState({ show: true, newFunc: closeMinisterDropDown });
  };

  const [ministersDropDownState, setMinistersDropDownState] = useState<{
    show: boolean;
    newFunc: React.MouseEventHandler;
  }>({ show: false, newFunc: openMinisterDropDown });

  // ============   SWITCH MINISTER ON CLICK    ===============  //
  const handleMinisterSwitch = (minister: number) => {
    setMinistersDropDownState({
      show: false,
      newFunc: openMinisterDropDown,
    });
    setnewMinisterState({
      photo: ministers[minister].photo,
      title: ministers[minister].title,
      role: ministers[minister].role,
      desc: (
        <>
          {ministers[minister].description.breakOne}
          <br />
          <br />
          {ministers[minister].description.breakTwo}
          <br />
          <br />
          {ministers[minister].description.breakThree}
          <br />
          <br />
          {ministers[minister].description.breakFour}
          <br />
          <br />
          {ministers[minister].description.breakFive}
        </>
      ),
    });
  };

  // =================   MAKE THE CURRENTLY CHOSEN MINISTER BIGGER    =============  //
  const [currentBigPhotoState, setcurrentBigPhotoState] = useState<{
    miracles?: string;
    morgans?: string;
    phipps?: string;
    davis?: string;
  }>({
    miracles: VerticalTabStyles.bigMiracles,
  });
  const handleCurrentMinisterBig = (minister: number) => {
    if (minister === 0) {
      setcurrentBigPhotoState({ miracles: VerticalTabStyles.bigMiracles });
    } else if (minister === 1) {
      setcurrentBigPhotoState({ morgans: VerticalTabStyles.bigMorgans });
    } else if (minister === 2) {
      setcurrentBigPhotoState({ phipps: VerticalTabStyles.bigPhipps });
    } else if (minister === 3) {
      setcurrentBigPhotoState({ davis: VerticalTabStyles.bigDavis });
    }
    setnewMinisterState({
      photo: ministers[minister].photo,
      title: ministers[minister].title,
      role: ministers[minister].role,
      desc: (
        <>
          {ministers[minister].description.breakOne}
          <br />
          <br />
          {ministers[minister].description.breakTwo}
          <br />
          <br />
          {ministers[minister].description.breakThree}
          <br />
          <br />
          {ministers[minister].description.breakFour}
          <br />
          <br />
          {ministers[minister].description.breakFive}
        </>
      ),
    });
  };

  return (
    <div className={VerticalTabStyles.mainWrapper}>
      <Menu />
      <section className={VerticalTabStyles.grid}>
        <div
          className={`${VerticalTabStyles.currentMinister}`}
          onClick={ministersDropDownState.newFunc}
        >
          <div
            style={{ backgroundImage: `url(${newMinisterState.photo})` }}
          ></div>
        </div>
        {ministersDropDownState.show && (
          <section className={VerticalTabStyles.ministersDropDownWrapper}>
            <div
              className={VerticalTabStyles.miracles}
              onClick={() => handleMinisterSwitch(0)}
            ></div>
            <div
              className={VerticalTabStyles.morgans}
              onClick={() => handleMinisterSwitch(1)}
            ></div>
            <div
              className={VerticalTabStyles.phipps}
              onClick={() => handleMinisterSwitch(2)}
            ></div>
            <div
              className={VerticalTabStyles.davis}
              onClick={() => handleMinisterSwitch(3)}
            ></div>
          </section>
        )}
        <section className={VerticalTabStyles.ministersList}>
          <div className={currentBigPhotoState.miracles}>
            <div
              className={VerticalTabStyles.miracles}
              onClick={() => handleCurrentMinisterBig(0)}
            ></div>
          </div>

          <div className={currentBigPhotoState.morgans}>
            <div
              className={VerticalTabStyles.morgans}
              onClick={() => handleCurrentMinisterBig(1)}
            ></div>
          </div>

          <div className={currentBigPhotoState.phipps}>
            <div
              className={VerticalTabStyles.phipps}
              onClick={() => handleCurrentMinisterBig(2)}
            ></div>
          </div>

          <div className={currentBigPhotoState.davis}>
            <div
              className={VerticalTabStyles.davis}
              onClick={() => handleCurrentMinisterBig(3)}
            ></div>
          </div>
        </section>
        <h1 className={`${VerticalTabStyles.ministerTitle}`}>
          {newMinisterState.title}
        </h1>
        <h2 className={VerticalTabStyles.ministerRole}>
          {newMinisterState.role}
        </h2>
        <p className={`${VerticalTabStyles.minsiterDesc}`}>
          {newMinisterState.desc}
        </p>
      </section>
      <Link href='/about'>
        <a className={`std-button ${VerticalTabStyles.ourStoryButton}`}>
          OUR STORY
        </a>
      </Link>
      <Footer />
    </div>
  );
};

export default AboutTeam;