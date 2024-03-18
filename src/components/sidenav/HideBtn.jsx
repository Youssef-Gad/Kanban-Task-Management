function HideBtn({ setHide }) {
  return (
    <button
      className="mx-auto mb-5 hidden items-center justify-center gap-2 font-bold text-medium-grey transition-all duration-300 hover:opacity-70 sm:flex"
      onClick={() => setHide(true)}
    >
      <img src="/src/assets/icon-hide-sidebar.svg" alt="logo" />
      <p>Hide Sidebar</p>
    </button>
  );
}

export default HideBtn;
