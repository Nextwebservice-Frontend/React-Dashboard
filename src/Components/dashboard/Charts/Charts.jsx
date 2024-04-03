import { useContext } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { contextData } from "../../../Providers/ContextProviders/ContextProviders";

const Charts = () => {
    const { show, showText } = useContext(contextData)
    return (
        <div>
           <div>
           <div className={`collapse collapse-arrow ${showText?'':'w-10 overflow-hidden'}`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title flex items-center gap-2 text-[#7e7e7e]">
                <FaCirclePlus />{showText && show ? 'CARDS' : ''}  
                </div>
                <div className={`collapse-content ${showText?'':'fixed left-12 bg-white shadow-lg z-20 rounded p-3'}`}>
                    <p className="flex gap-2 items-center text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100">

                        <FaRegCircle /> Analytics
                    </p>
                    <p className="flex gap-2 items-center text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100">

                        <FaRegCircle /> CRM
                    </p>
                    <p className="flex gap-2 items-center text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100">

                        <FaRegCircle /> eCommerce
                    </p>
                    <p className="flex gap-2 items-center text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100">

                        <FaRegCircle /> Logistics
                    </p>
                    <p className="flex gap-2 items-center text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100">

                        <FaRegCircle /> Academy
                    </p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Charts;