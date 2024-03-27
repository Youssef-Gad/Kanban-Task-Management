import { useState } from "react";
import SidNav from "../components/sidenav/SideNav";
import Columns from "../components/columns/Columns.jsx";
import ShowBtn from "../components/sidenav/ShowBtn.jsx";
import Overlay from "./Overlay.jsx";
import BoardModal from "../components/board/BoardModal.jsx";
import { useAppContext } from "../context/AppContext.jsx";
import EditBoardModal from "../components/board/EditBoardModal.jsx";
import DeleteModal from "./DeleteModal.jsx";

function Main() {
  const [hide, setHide] = useState(false);
  const {
    setNewBoardShowModal,
    showNewBoardModal,
    showEditBoard,
    setShowEditBoard,
    setShowDeleteBoard,
    showDeleteBoard,
  } = useAppContext();

  return (
    <main className="select-none">
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
      <SidNav hide={hide} setHide={setHide} />
      {hide && <ShowBtn setHide={setHide} />}
      <Columns hide={hide} />
    </main>
  );
}

export default Main;
