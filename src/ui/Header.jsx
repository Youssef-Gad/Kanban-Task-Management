import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import DropBox from "./DropBox";

function Header() {
  const [showDropBox, setShowDropBox] = useState(false);
  const { setShowSideNavMobile, showSideNavMobile, activeBoardId, boards } =
    useAppContext();

  return (
    <header className="sticky top-0 flex h-[6rem] select-none items-center bg-white">
      <img
        src="/src/assets/logo-dark.svg"
        alt="logo"
        className="hidden border-b border-r p-8 pr-[6.5rem] sm:block"
      />
      <img
        src="/src/assets/logo-mobile.svg"
        alt="logo"
        className="block border-b py-[1.4rem] pl-5 sm:hidden"
      />
      <div className="flex flex-grow items-center justify-between border-b p-[1.3rem]">
        <div className="flex cursor-pointer items-center gap-3 sm:cursor-auto">
          <h1 className="px-0 text-xl font-bold sm:px-6 sm:text-2xl">
            {boards.map((board) =>
              board.id === activeBoardId ? board.name : null,
            )}
          </h1>
          {showSideNavMobile ? (
            <img
              src="/src/assets/icon-chevron-down.svg"
              alt="logo"
              className=" w-5 sm:hidden"
              onClick={() => setShowSideNavMobile((e) => !e)}
            />
          ) : (
            <img
              src="/src/assets/icon-chevron-up.svg"
              alt="logo"
              className=" w-5 sm:hidden"
              onClick={() => setShowSideNavMobile((e) => !e)}
            />
          )}
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden rounded-full bg-main-purple px-6 py-3 font-bold text-white sm:block">
            + Add New Task
          </button>
          <button className="block rounded-full bg-main-purple px-4 py-2 sm:hidden">
            <img src="/src/assets/icon-add-task-mobile.svg" alt="icon" />
          </button>

          <img
            className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-light-grey"
            src="/src/assets/icon-vertical-ellipsis.svg"
            alt="icon"
            onClick={() => setShowDropBox((e) => !e)}
          />
          {showDropBox && <DropBox type="header" />}
        </div>
      </div>
    </header>
  );
}

export default Header;
