import BoardList from "../board/BoardList";
import HideBtn from "./HideBtn";
import ThemeBtn from "./ThemeBtn";
import ShowBtn from "./ShowBtn";

function SideNav({ hide, setHide }) {
  return (
    <div
      className={`relative flex h-[82vh] w-[18.2rem] flex-col justify-between border-r ${hide ? "translate-x-[-100%]" : ""} transition-transform duration-300`}
    >
      <BoardList />
      <div>
        <ThemeBtn />
        <HideBtn setHide={setHide} />
        {hide && <ShowBtn setHide={setHide} />}
      </div>
    </div>
  );
}

export default SideNav;
