import { useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import SidNav from "../components/sidenav/SideNav";
import Columns from "../components/columns/Columns.jsx";
import ShowBtn from "../components/sidenav/ShowBtn.jsx";
import Overlay from "./Overlay.jsx";
import BoardModal from "../components/modals/BoardModal.jsx";
import EditBoardModal from "../components/modals/EditBoardModal.jsx";
import DeleteModal from "../components/modals/DeleteModal.jsx";
import NewColumnModal from "../components/modals/NewColumnModal.jsx";
import NewTaskModal from "../components/modals/NewTaskModal.jsx";
import EditTaskModal from "../components/modals/EditTaskModal.jsx";

function Main() {
  const [hide, setHide] = useState(false);
  const {
    setNewBoardShowModal,
    showNewBoardModal,
    showEditBoard,
    setShowEditBoard,
    setShowDeleteBoard,
    showDeleteBoard,
    setShowNewColumn,
    showNewColumn,
    showNewTask,
    setShowNewTask,
    showEditTask,
    setShowEditTask,
  } = useAppContext();

  return (
    <main className="select-none dark:bg-dark-grey dark:text-white">
      {showNewBoardModal && (
        <>
          <Overlay onClick={setNewBoardShowModal} />
          <BoardModal setShowModal={setNewBoardShowModal} />
        </>
      )}
      {showEditBoard && (
        <>
          <Overlay onClick={setShowEditBoard} />
          <EditBoardModal />
        </>
      )}
      {showDeleteBoard && (
        <>
          <Overlay onClick={setShowDeleteBoard} />
          <DeleteModal />
        </>
      )}
      {showNewColumn && (
        <>
          <Overlay onClick={setShowNewColumn} />
          <NewColumnModal />
        </>
      )}
      {showNewTask && (
        <>
          <Overlay onClick={setShowNewTask} />
          <NewTaskModal />
        </>
      )}
      {showEditTask && (
        <>
          <Overlay onClick={setShowEditTask} />
          <EditTaskModal />
        </>
      )}
      <SidNav hide={hide} setHide={setHide} />
      {hide && <ShowBtn setHide={setHide} />}
      <Columns hide={hide} />
    </main>
  );
}

export default Main;
