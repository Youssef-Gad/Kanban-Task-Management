import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function EditTaskModal() {
  const { activeBoard, dispatch, setShowEditTask, activeTask } =
    useAppContext();
  const [newTaskName, setNewTaskName] = useState(activeTask.title);
  const [newTaskDescription, setNewTaskDescription] = useState(
    activeTask.description,
  );
  const [newSubtakName, setNewSubtakName] = useState("");
  const [newTaskStauts, setNewTaskStauts] = useState(activeTask.status);
  const [showAddSubtask, setShowAddSubtask] = useState(false);

  function handleEditTask() {
    // const task = {
    //   ...activeTask,
    //   title: newTaskName,
    //   description: newTaskDescription,
    //   status: newTaskStauts,
    //   subtasks: [
    //     ...activeTask.subtasks,
    //     { title: newSubtakName, isCompleted: false },
    //   ],
    // };

    // dispatch({ type: "EditTask", payload: task });
    setShowEditTask(false);
  }

  return (
    <div className="fixed right-[30%] top-[1%] z-50 min-h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <p className="mb-5 text-xl font-bold">Edit Task</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Task Name</label>
        <input
          className="focus:shadow-outline mb-4 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />

        <label className="text-sm font-bold text-medium-grey">
          Description
        </label>
        <textarea
          className="mb-4 w-full border  p-2 font-semibold text-medium-grey outline-none"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>

        <label className="text-sm font-bold text-medium-grey">Subtask</label>
        {showAddSubtask && (
          <input
            className="focus:shadow-outline my-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
            type="text"
            placeholder="Enter New Subtak Name"
            value={newSubtakName}
            onChange={(e) => setNewSubtakName(e.target.value)}
          />
        )}
        <button
          className="mb-4 mt-1 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
          onClick={() => setShowAddSubtask(true)}
        >
          Add New Subtask
        </button>

        <label className="text-sm font-bold text-medium-grey">
          Current Status
        </label>
        <select
          className="w-full rounded-md border-2 border-[#828fa366] p-2 text-sm font-semibold focus:border-main-purple"
          value={newTaskStauts}
          onChange={(e) => setNewTaskStauts(e.target.value)}
        >
          {activeBoard.columns.map((col) => (
            <option key={col.name} value={col.name} className="font-semibold">
              {col.name}
            </option>
          ))}
        </select>
        <button
          className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
          onClick={handleEditTask}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default EditTaskModal;
