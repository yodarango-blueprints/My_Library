import React, { useState, useEffect, useRef } from "react";

// child comps
import CarrouselModules from "./carrousel_modules";

// styles
import carrouselDisplayStyles from "./carrousel_display.module.css";

  // =================== SHOW THE TSCA MODULE INFO  ==================== //
  const [tscaModuleState, setTscaModuleState] = useState<boolean | JSX.Element>(
    false
  );
  const showCarrousel = () => {
    setTscaModuleState(<CarrouselModules closeTscaModule={closeCarrousel} />);
  };

  // ==============   CLOSE THE TSCA MODULES    ================ //
  const closeCarrousel = () => {
    setTscaModuleState(false);
  };


{!tscaModuleState && (
    <section className={`${carrouselDisplayStyles.tscaAddWrapper}`}>
      <h2 className={`${carrouselDisplayStyles.wisdom}`}>WISDOM</h2>
      <h2 className={`${carrouselDisplayStyles.integrity}`}>INTEGRITY</h2>
      <h2 className={`${carrouselDisplayStyles.excellence}`}>EXCELLENCE</h2>
      <button
        className={`std-button ${carrouselDisplayStyles.stdButtonAcademy}`}
        onClick={showCarrousel}
      >
        ABOUT OUR ACADEMY
      </button>
    </section>
  )}

  {tscaModuleState && (
    <section
      className={`${carrouselDisplayStyles.tscaAddWrapper} ${carrouselDisplayStyles.tscaModule}`}
    >
      {tscaModuleState}
    </section>
  )}