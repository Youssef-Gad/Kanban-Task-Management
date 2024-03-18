import ColumnHeader from "./ColumnHeader";

function Column({ column }) {
  return (
    <div className="w-[14rem] text-center">
      <ColumnHeader column={column} />
    </div>
  );
}

export default Column;
