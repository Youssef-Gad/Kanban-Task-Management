import Tasks from "../tasks/Tasks";
import ColumnHeader from "./ColumnHeader";

function Column({ column }) {
  return (
    <div className="w-[14rem] text-center">
      <ColumnHeader column={column} />
      <Tasks tasks={column.tasks} />
    </div>
  );
}

export default Column;
