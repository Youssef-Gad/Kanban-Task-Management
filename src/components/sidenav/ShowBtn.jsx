import React from "react";

function ShowBtn({ setHide }) {
  return (
    <button
      className="fixed left-[0rem] top-[30rem] z-10 hidden h-12 w-16 items-center justify-center rounded-r-full bg-main-purple transition-all duration-300 hover:opacity-70 sm:flex"
      onClick={() => setHide(false)}
    >
      <img src="/src/assets/icon-show-sidebar.svg" alt="icon" />
    </button>
  );
}

export default ShowBtn;
