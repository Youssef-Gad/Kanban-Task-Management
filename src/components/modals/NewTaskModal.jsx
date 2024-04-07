import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import shortid from "shortid";

function NewTaskModal() {
  const { activeBoard, dispatch, setShowNewTask } = useAppContext();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtakName, setSubtakName] = useState("");
  const [taskStauts, setTaskStauts] = useState(activeBoard.columns[0].name);

  function handleAddNewTask() {
    if (!taskName || !subtakName) return;
    const newTask = {
      id: shortid.generate(),
      title: taskName,
      description: taskDescription,
      status: taskStauts,
      subtasks: [{ title: subtakName, isCompleted: false }],
    };
    dispatch({
      type: "addNewTask",
      payload: { status: taskStauts, newTask: newTask },
    });
    setShowNewTask(false);
  }

  return (
    <div className="fixed right-7 top-20 z-40 w-[20rem] rounded-xl bg-white p-8 text-start sm:right-[30%] sm:top-[2%] sm:min-h-[23rem] sm:w-[30rem] dark:bg-dark-grey">
      <p className="mb-5 text-xl font-bold">Add New Task</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Task Name</label>
        <input
          className="focus:shadow-outline mb-4 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          placeholder="Enter Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label className="text-sm font-bold text-medium-grey">
          Description
        </label>
        <textarea
          className="mb-4 w-full border p-2 font-semibold text-medium-grey outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          placeholder="Enter Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label className="text-sm font-bold text-medium-grey">Subtask</label>
        <input
          className="focus:shadow-outline mb-4 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          placeholder="Enter Subtak Name"
          value={subtakName}
          onChange={(e) => setSubtakName(e.target.value)}
        />

        <label className="text-sm font-bold text-medium-grey">
          Current Status
        </label>
        <select
          className="w-full rounded-md border-2 border-[#828fa366] p-2 text-sm font-semibold focus:border-main-purple dark:border dark:border-lines-dark dark:bg-dark-grey"
          value={taskStauts}
          onChange={(e) => setTaskStauts(e.target.value)}
        >
          {activeBoard.columns.map((col) => (
            <option key={col.name} value={col.name} className="font-semibold">
              {col.name}
            </option>
          ))}
        </select>
        <button
          className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
          onClick={handleAddNewTask}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default NewTaskModal;
