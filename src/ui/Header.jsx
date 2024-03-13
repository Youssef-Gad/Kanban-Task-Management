function Header() {
  return (
    <header className="flex h-[6rem] items-center">
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
        <div className="flex items-center gap-3">
          <h1 className="px-0 text-xl font-bold sm:px-6 sm:text-2xl">
            Platform Launch
          </h1>
          <img
            src="/src/assets/icon-chevron-down.svg"
            alt="logo"
            className="block sm:hidden"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden rounded-full bg-main-purple px-6 py-3 font-bold text-white sm:block">
            + Add New Task
          </button>
          <button className="block rounded-full bg-main-purple px-4 py-2 sm:hidden">
            <img src="/src/assets/icon-add-task-mobile.svg" alt="icon" />
          </button>
          <button>
            <img src="/src/assets/icon-vertical-ellipsis.svg" alt="icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
