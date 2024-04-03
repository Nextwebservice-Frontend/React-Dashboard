import { Typography } from "@mui/material";
import Logo from "./Logo/Logo";
import Dboard from "./Dboard/Dboard";
import FontPages from "./FontPages/FontPages";
import Layouts from "./Layouts/Layouts";
import Page_Apps from "./Page_Apps/Page_Apps";
import Ecommerce from "./eCommerce/Ecommerce";
import Academy from "./Academy/Academy";
import Logistic from "./Logistic/Logistic";
import Card from "./Card/Card";
import Extendedui from "./Extendedui/Extendedui";
import Icons from "./Icons/Icons";
import Charts from "./Charts/Charts";
import Maps from "./Maps/Maps";
import './scrollbar.css'
import { useContext, useState } from "react";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { contextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
const {setShow,show}=useContext(contextData)
    return (
        <div className={`${show?'w-auto':'w-3'} max-w-[320px] absolute lg:w-full lg:relative`}>
            <button
                onClick={() => setShow(!show)}
                className={`p-2 ml-5 text-gray-500 font-bold rounded-full flex  absolute top-4 lg:hidden  text-3xl  `}>
                <IoIosMenu />
            </button>

            <div
                style={{ transition: "1s" }}
                className={`h-screen p-2 border bg-white overflow-y-scroll relative z-10 lg:static  ${show ? "right-0" : "right-96"}  `}>
                <div className="   ">
                    <Logo show={show} setShow={setShow}  />
                    <Dboard />
                    <Layouts />
                    <FontPages />

                    <Typography sx={{ my: "25px", color: "#93909e" }}>
                        APPS & PAGES
                    </Typography>

                    <Page_Apps />
                    <Ecommerce />
                    <Academy />
                    <Logistic />

                    <Typography sx={{ my: "25px", color: "#93909e" }}>
                        COMPONENTS
                    </Typography>

                    <Card />
                    <Extendedui />
                    <Icons />

                    <Typography sx={{ my: "25px", color: "#93909e" }}>
                        Chart & MAPS
                    </Typography>

                    <Charts />
                    <Maps />

                </div>
            </div>

        </div>

    );
};

export default Dashboard;