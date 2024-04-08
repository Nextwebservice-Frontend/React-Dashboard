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
import "./scrollbar.css";
import { useContext } from "react";
import { contextData } from "../../Providers/ContextProviders/ContextProviders";
import { IoIosMenu } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);
  const { setShow, show, showText, setShowText } = useContext(ontextData);

  const { setShow, show, showText, setShowText } = useContext(ContextData);
  return (
    <div
      className={`${
        show ? "w-auto" : "w-3"
      } max-w-[320px] absolute lg:w-full lg:relative ${showText ? "" : "w-14"}`}
    >
      <button
        onClick={() => {
          setShowText(true);
          setShow(!show);
        }}
        className={`p-2 ml-5 text-gray-500 font-bold rounded-full flex  absolute top-4 lg:hidden  text-3xl  `}
      >
        <IoIosMenu />
      </button>

      <div
        style={{ transition: "1s" }}
        className={`h-screen p-2 border bg-white overflow-y-scroll relative z-10 lg:static  ${
          show ? "right-0" : "right-96"
        }  `}
      >
        <div className="   ">
          <Logo show={show} setShow={setShow} />
          <Dboard />
          <Layouts />
          <FontPages />

          <Ecommerce />
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
