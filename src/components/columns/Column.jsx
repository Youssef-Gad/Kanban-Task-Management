import Tasks from "../tasks/Tasks";
import ColumnHeader from "./ColumnHeader";

function Column({ column }) {
  return (
    <div className="w-[10rem] text-center sm:w-[14rem]">
      <ColumnHeader column={column} />
      <Tasks tasks={column.tasks} />
    </div>
  );
}

export default Column;
