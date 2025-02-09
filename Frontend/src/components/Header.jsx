import { VscSettings } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center w-full max-h-[4.4rem] px-6 py-3 bg-gray-800 shadow-md border-b border-white sm:max-h-[5rem] sm:py-4">
      {/* Logo */}
      <div className="flex flex-row text-2xl font-extralight text-white">
        <a href="/" className="hover:text-gray-300 transition-colors">
          F I N E
        </a>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-6 text-3xl text-gray-400">
        <a
          href="/settings"
          className="hover:text-white transition-colors"
          title="Settings"
        >
          <VscSettings />
        </a>
        <a
          href="/profile"
          className="hover:text-white transition-colors"
          title="Profile"
        >
          <CgProfile />
        </a>
      </div>
    </div>
  );
}

export default Header;
