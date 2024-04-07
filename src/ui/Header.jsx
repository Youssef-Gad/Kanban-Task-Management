import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import DropBox from "./DropBox";

function Header() {
  const [showDropBox, setShowDropBox] = useState(false);
  const {
    setShowSideNavMobile,
    showSideNavMobile,
    activeBoard,
    setShowNewTask,
    darkMode,
  } = useAppContext();

  return (
    <header className="fixed left-0 right-0 flex h-[6rem] select-none items-center bg-white dark:bg-dark-grey dark:text-white">
      {darkMode ? (
        <img
          src="/src/assets/logo-light.svg"
          alt="logo"
          className="hidden border-b border-r p-8 pr-[6.5rem] sm:block dark:border-b-lines-dark dark:border-r-lines-dark"
        />
      ) : (
        <img
          src="/src/assets/logo-dark.svg"
          alt="logo"
          className="hidden border-b border-r p-8 pr-[6.5rem] sm:block"
        />
      )}
      <img
        src="/src/assets/logo-mobile.svg"
        alt="logo"
        className="block border-b py-[1.4rem] pl-5 sm:hidden dark:border-b-lines-dark dark:border-r-lines-dark"
      />
      <div className="flex flex-grow items-center justify-between border-b p-[1.1rem] sm:p-[1.3rem] dark:border-b-lines-dark">
        <div className="flex cursor-pointer items-center gap-3 sm:cursor-auto">
          <h1 className="px-0 text-xl font-bold sm:px-6 sm:text-2xl">
            {activeBoard.name}
          </h1>
          {showSideNavMobile ? (
            <img
              src="/src/assets/icon-chevron-down.svg"
              alt="logo"
              className=" w-5 sm:hidden"
              onClick={() => setShowSideNavMobile(true)}
            />
          ) : (
            <img
              src="/src/assets/icon-chevron-up.svg"
              alt="logo"
              className=" w-5 sm:hidden"
              onClick={() => setShowSideNavMobile(true)}
            />
          )}
        </div>
        <div className="flex items-center gap-6">
          <button
            className="hidden rounded-full bg-main-purple px-6 py-3 font-bold text-white sm:block"
            onClick={() => setShowNewTask(true)}
          >
            + Add New Task
          </button>
          <button
            className="block rounded-full bg-main-purple px-4 py-2 sm:hidden"
            onClick={() => setShowNewTask(true)}
          >
            <img src="/src/assets/icon-add-task-mobile.svg" alt="icon" />
          </button>

          <img
            className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-light-grey dark:hover:bg-very-dark-grey"
            src="/src/assets/icon-vertical-ellipsis.svg"
            alt="icon"
            onClick={() => setShowDropBox((e) => !e)}
          />
          {showDropBox && (
            <DropBox type="header" setShowDropBox={setShowDropBox} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
