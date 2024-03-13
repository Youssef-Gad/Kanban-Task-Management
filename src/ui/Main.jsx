import { useState } from "react";
import Column from "../components/board/Column";
import SidNav from "../components/sidenav/SideNav";

function Main() {
  const [hide, setHide] = useState(false);
  return (
    <main className="flex">
      <SidNav hide={hide} setHide={setHide} />
      <Column hide={hide} />
    </main>
  );
}

export default Main;
