function Column({ hide }) {
  return (
    <div
      className={`w-[calc(100%-18rem)] ${hide ? "translate-x-[-25%]" : ""} transition-transform duration-300`}
    >
      Column
    </div>
  );
}

export default Column;
