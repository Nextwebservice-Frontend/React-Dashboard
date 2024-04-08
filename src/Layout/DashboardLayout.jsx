import { useContext } from "react";
import Dashboard from "../Components/dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import { contextData } from "../Providers/ContextProviders/ContextProviders";

const DashboardLayout = () => {
    const {showText}=useContext(contextData);

    return (
        <div className="lg:flex justify-start  gap-[1%]">
        <div className={` ${showText?'xl:w-[17%] lg:w-[21%] w-[30%]':'w-[70px]'} `}>
          <Dashboard />
        </div>
        <div className={`xl:w-[82%] lg:w-[78%] w-full`}>
          <Home />
        </div>
      </div>
    );
};

export default DashboardLayout;