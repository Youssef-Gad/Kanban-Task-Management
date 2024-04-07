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
        className={`${showSideNavMobile ? "fixed left-[3rem] top-[26vh] z-40 w-[17rem] bg-white" : "hidden"} bg-white sm:fixed sm:bottom-0 sm:left-0 sm:flex sm:min-h-[calc(100%-96px)] sm:w-[18.2rem] sm:flex-col sm:justify-between sm:border-r dark:bg-dark-grey sm:dark:border-r-lines-dark sm:${hide ? "hidden" : ""} scrollbar-hide overflow-y-scroll`}
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
