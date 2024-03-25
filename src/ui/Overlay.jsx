function Overlay({ onClick, children }) {
  return (
    <div
      className="fixed left-0 top-0 z-40 h-full w-full bg-[#00000080]"
      onClick={() => onClick((e) => !e)}
    >
      {children}
    </div>
  );
}

export default Overlay;
