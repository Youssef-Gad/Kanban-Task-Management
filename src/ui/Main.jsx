import { useState } from "react";
import SidNav from "../components/sidenav/SideNav";
import Columns from "../components/columns/Columns.jsx";
import ShowBtn from "../components/sidenav/ShowBtn.jsx";

function Main() {
  const [hide, setHide] = useState(true);

  return (
    <main className="select-none">
      <SidNav hide={hide} setHide={setHide} />
      {hide && <ShowBtn setHide={setHide} />}
      <Columns hide={hide} />
    </main>
  );
}

export default Main;
