import { useState } from "react";
import SidNav from "../components/sidenav/SideNav";
import Columns from "../components/columns/Columns.jsx";

function Main() {
  const [hide, setHide] = useState(false);

  return (
    <main className="relative flex select-none items-center justify-center sm:items-start ">
      <SidNav hide={hide} setHide={setHide} />
      <Columns hide={hide} />
    </main>
  );
}

export default Main;
