import BoardList from "../board/BoardList";
import HideBtn from "./HideBtn";
import ThemeBtn from "./ThemeBtn";
import { useAppContext } from "../../context/AppContext";
import Overlay from "../../ui/Overlay";

function SideNav({ hide, setHide }) {
  const { showSideNavMobile, setShowSideNavMobile } = useAppContext();

  return (
    <>
      {showSideNavMobile && <Overlay onClick={setShowSideNavMobile} />}
      {!hide && <Overlay onClick={setHide} />}
      <div
        className={`${showSideNavMobile ? "fixed left-[10rem] top-[26vh] z-40 w-[17rem] rounded-md bg-white" : "hidden"} bg-white sm:fixed sm:left-0 sm:flex sm:h-[82vh] sm:w-[18.2rem] sm:flex-col sm:justify-between sm:border-r sm:${hide ? "hidden" : ""} z-40 rounded-md`}
      >
        <BoardList />
        <div>
          <ThemeBtn />
          <HideBtn setHide={setHide} />
        </div>
      </div>
    </>
  );
}

export default SideNav;
