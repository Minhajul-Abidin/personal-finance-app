import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import {
  IoNewspaperOutline,
  IoChatboxEllipsesOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const Menus = [
  { name: "Chat", path: "/", icon: <IoChatboxEllipsesOutline /> },
  { name: "Document", path: "/document", icon: <IoDocumentTextOutline /> },
  { name: "News", path: "/news", icon: <IoNewspaperOutline /> },
  { name: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

const Navigation = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full max-h-[4.4rem] px-6 py-3 bg-gray-800 border-t shadow-md rounded-t-2xl sm:max-h-[5rem] sm:py-4">
      {/* Navigation Menu */}
      <ul className="flex justify-between w-full px-auto sm:px-6 md:px-8 lg:px-12">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16 text-center">
            <button
              onClick={() => {
                setActive(i);
                navigate(menu.path);
              }}
              className={`flex flex-col items-center p-2 w-full rounded-lg transition-all duration-300 text-white
                ${
                  active === i
                    ? "bg-rose-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-rose-500"
                }`}
            >
              {menu.icon}
              <span className="text-sm mt-1">{menu.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
