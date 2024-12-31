// import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
