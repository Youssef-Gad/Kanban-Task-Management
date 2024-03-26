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

      <div
        className={`${showSideNavMobile ? "fixed left-[10rem] top-[26vh] z-30 w-[17rem] rounded-md bg-white" : "hidden"} bg-white sm:fixed sm:bottom-0 sm:left-0 sm:flex sm:h-[83vh] sm:w-[18.2rem] sm:flex-col sm:justify-between sm:border-r sm:${hide ? "hidden" : ""} scrollbar-hide overflow-y-scroll rounded-md`}
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
