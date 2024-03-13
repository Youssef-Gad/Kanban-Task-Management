import React from "react";

function ShowBtn({ setHide }) {
  return (
    <button
      className="absolute left-[18.1rem] top-[23rem] flex h-12 w-16 items-center justify-center rounded-r-full bg-main-purple transition-all duration-300 hover:opacity-70"
      onClick={() => setHide(false)}
    >
      <img src="/src/assets/icon-show-sidebar.svg" alt="icon" />
    </button>
  );
}

export default ShowBtn;
