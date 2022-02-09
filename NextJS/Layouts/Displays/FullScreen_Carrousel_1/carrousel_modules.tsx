// styles
import carrouselModulesStyles from "./carrousel_modules.module.css";

type carroselModulesProps = {
  closeCarrousel: React.MouseEventHandler;
};
const AcademyModules = ({ closeCarrousel }: carroselModulesProps) => {
  // =============    SWITCH MODULES ON CLICK   ============== //
  const [currentModuleState, setCurrentModuleState] = useState<string>("first");

  const openSecondModule = () => {
    setCurrentModuleState("second");
  };

  const openThirdModule = () => {
    setCurrentModuleState("third");
  };

  const openFirstModule = () => {
    setCurrentModuleState("first");
  };
  return (
    <>
      {currentModuleState === "first" && (
        <div className={`${carrouselModulesStyles.mainWrapper}`}>
          <div className={`${carrouselModulesStyles.leftGrid}`}></div>
          <div className={`${carrouselModulesStyles.rightGrid}`}>
            <h1>POINT NUMBER ONE</h1>
            <p className={carrouselModulesStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={carrouselModulesStyles.nextButton}
              onClick={openSecondModule}
            ></div>
          </div>
          <div
            className={`std-button ${carrouselModulesStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
      {currentModuleState === "second" && (
        <div className={`${carrouselModulesStyles.mainWrapper}`}>
          <div className={`${carrouselModulesStyles.leftGrid}`}></div>
          <div className={`${carrouselModulesStyles.rightGrid}`}>
            <h1>POINT NUMBER TWO</h1>
            <p className={carrouselModulesStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={carrouselModulesStyles.nextButton}
              onClick={openThirdModule}
            ></div>
          </div>
          <div
            className={`std-button ${carrouselModulesStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
      {currentModuleState === "third" && (
        <div className={`${carrouselModulesStyles.mainWrapper}`}>
          <div className={`${carrouselModulesStyles.leftGrid}`}></div>
          <div className={`${carrouselModulesStyles.rightGrid}`}>
            <h1>POINT NUMBER THREE</h1>
            <p className={carrouselModulesStyles.description}>
              The finalists for Best Awards 2021 have been announced and we are
              so excited that our work for Youthforia made the list. We are
              finalists in 5 categories - colour, photography, 3D, identity and
              packaging. Winners are announced 8th October, wish us luck!
            </p>
            <div
              className={carrouselModulesStyles.nextButton}
              onClick={openFirstModule}
            ></div>
          </div>
          <div
            className={`std-button ${carrouselModulesStyles.doneButton}`}
            onClick={closeTscaModule}
          >
            DONE READING
          </div>
        </div>
      )}
    </>
  );
};

export default AcademyModules;