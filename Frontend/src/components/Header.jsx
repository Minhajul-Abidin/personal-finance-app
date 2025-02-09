import { VscSettings } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div className="flex flex-row justify-between w-full max-h-[4.4rem] px-6 py-3 bg-white shadow-md rounded-b-2xl sm:max-h-[5rem] sm:py-4">
      <div className="flex flex-row text-2xl font-extralight">
        <a href="/">F I N E</a>
      </div>
      <div className="flex flex-row gap-8 text-3xl font-thin">
        <a href="/settings">
          <VscSettings />
        </a>
        <a href="/profile">
          <CgProfile />
        </a>
      </div>
    </div>
  );
}

export default Header;
