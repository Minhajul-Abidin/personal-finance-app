import { useState } from "react";
import { FaHome, FaUser, FaComment, FaCamera, FaCog } from "react-icons/fa";

const Menus = [
  { name: "Home", icon: <FaHome />, dis: "translate-x-0" },
  { name: "Profile", icon: <FaUser />, dis: "translate-x-16" },
  { name: "Message", icon: <FaComment />, dis: "translate-x-32" },
  { name: "Photos", icon: <FaCamera />, dis: "translate-x-48" },
  { name: "Settings", icon: <FaCog />, dis: "translate-x-64" },
];

const Navigation = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 w-full max-h-[4.4rem] px-6 py-3 bg-white border-t shadow-md rounded-t-2xl sm:max-h-[5rem] sm:py-4">
      {/* Navigation Menu */}
      <ul className="flex justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16 text-center">
            <button
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 
            ${
              active === i
                ? "bg-rose-500 text-white shadow-lg"
                : "text-gray-700 hover:text-rose-500"
            }`}
              onClick={() => setActive(i)}
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
