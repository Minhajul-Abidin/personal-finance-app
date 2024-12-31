import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", path: "/dashboard" },
    { title: "Chat", src: "Chat", path: "/inbox" },
    { title: "Account", src: "User", gap: true, path: "/accounts" },
    { title: "News", src: "Calendar", path: "/schedule" },
    { title: "Search", src: "Search", path: "/search" },
    { title: "Analytics", src: "Chart", path: "/analytics" },
    { title: "Files", src: "Folder", gap: true, path: "/files" },
    { title: "Setting", src: "Setting", path: "/settings" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          {/* WiseWealth */}
          <span className="text-blue-400">WiseW</span>ealth
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <NavLink
            to={Menu.path}
            key={index}
            className={`flex items-center p-2 rounded-md text-sm text-gray-300 cursor-pointer hover:bg-light-white gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            // activeClassName="bg-light-white" // Optional: active style when link is selected
          >
            <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
