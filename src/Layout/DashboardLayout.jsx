import { useContext } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import { ContextData } from "../Providers/ContextProviders/ContextProviders";
import Navbar from "../Components/dashboard/Navber/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { showText } = useContext(ContextData);

  return (
    <div className="lg:flex justify-start  gap-[1%]">
      <div
        className={` ${
          showText ? "xl:w-[17%] lg:w-[21%] w-[30%]" : "w-[70px]"
        } `}
      >
        <Dashboard />
      </div>
      <div className={`xl:w-[82%] lg:w-[78%] md:w-[75%] w-full`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
