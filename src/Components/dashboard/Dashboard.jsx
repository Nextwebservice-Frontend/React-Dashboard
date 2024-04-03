import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Academy from "./Academy/Academy";
import Card from "./Card/Card";
import Charts from "./Charts/Charts";
import Dboard from "./Dboard/Dboard";
import Extendedui from "./Extendedui/Extendedui";
import FontPages from "./FontPages/FontPages";
import Icons from "./Icons/Icons";
import Layouts from "./Layouts/Layouts";
import Logistic from "./Logistic/Logistic";
import Logo from "./Logo/Logo";
import Maps from "./Maps/Maps";
import Page_Apps from "./Page_Apps/Page_Apps";
import Ecommerce from "./eCommerce/Ecommerce";
import './scrollbar.css';

// eslint-disable-next-line react/prop-types
const Dashboard = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="absolute">
            <button
                onClick={() => setShow(!show)}
                className={`p-2 ml-5 bg-purple-500 text-zinc-200 font-bold rounded-full flex  absolute top-4 lg:hidden float  `}>
                <GiHamburgerMenu />
            </button>

            <div
                style={{ transition: "1s" }}
                className={`h-screen p-2 border bg-white overflow-y-scroll relative z-10 lg:static  ${show ? "right-0" : "right-96"}  `}>
                <div className="   ">
                    <Logo show={show} setShow={setShow} />
                    <Dboard />
                    <Layouts />
                    <FontPages />




                    

                    
                    <Ecommerce />
                    <Academy />
                    <Logistic />


                   

                    <Card />
                    <Extendedui />
                    <Icons />
                   


                    <Charts />
                    <Maps />

                </div>
            </div>

        </div>

    );
};

export default Dashboard;