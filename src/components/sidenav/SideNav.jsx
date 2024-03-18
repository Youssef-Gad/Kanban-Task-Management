import BoardList from "../board/BoardList";
import HideBtn from "./HideBtn";
import ThemeBtn from "./ThemeBtn";
import ShowBtn from "./ShowBtn";
import { useAppContext } from "../../context/AppContext";

function SideNav({ hide, setHide }) {
  const { showSideNavMobile, setShowSideNavMobile } = useAppContext();

  return (
    <>
      {showSideNavMobile && (
        <div
          className="z-1 absolute h-[160.5vh] w-full bg-black opacity-50"
          onClick={() => setShowSideNavMobile((e) => !e)}
        ></div>
      )}
      <div
        className={`${showSideNavMobile ? "z-5 absolute top-[10vh] w-[17rem] rounded-md bg-white" : "hidden"} sm:relative sm:flex sm:h-[82vh] sm:w-[18.2rem] sm:flex-col sm:justify-between sm:border-r sm:${hide ? "translate-x-[-100%]" : ""} sm:transition-transform
      sm:duration-300`}
      >
        <BoardList />
        <div>
          <ThemeBtn />
          <HideBtn setHide={setHide} />
          {hide && <ShowBtn setHide={setHide} />}
        </div>
      </div>
    </>
  );
}

export default SideNav;
