import { IoIosMenu } from "react-icons/io";
import { FaStore, FaUserGroup } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import avater from '../../../assets/avator.jpg'
const Navber = () => {
  return (
    <div className="flex justify-between items-center mx-10 box-border px-8 shadow-xl py-6">
            <div className="flex justify-start items-center gap-4">
                <IoIosMenu className="text-3xl text-gray-600 mt-1 cursor-pointer" />
                <p className="text-2xl">
                    Dashboard
                </p>
            </div>
            <div className="flex justify-end items-center gap-4">
                <FaUserGroup  className="text-2xl text-gray-600 mt-1 cursor-pointer"/>
                <FaStore className="text-2xl text-gray-600 mt-1 cursor-pointer"/>
                <CgMenuGridO  className="text-2xl text-gray-600 mt-1 cursor-pointer"/>
                <img className="w-8 h-8 rounded-full cursor-pointer" src={avater} alt="" />
            </div>
        </div>
  )
}

export default Navber
