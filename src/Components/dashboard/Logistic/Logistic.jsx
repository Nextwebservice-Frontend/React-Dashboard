import { FaRegCircle } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";

const Logistic = () => {
    return (
        <div>
             <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title flex items-center gap-2 text-[#7e7e7e]">
                <RiTruckLine />  Logistics
                </div>
                <div className="collapse-content">
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
    );
};

export default Logistic;