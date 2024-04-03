import { IoIosMenu } from "react-icons/io";
import { FaStore, FaUserGroup } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import avater from '../../../assets/avator.jpg'
import ProfilePopUp from "./profile_pop_up/ProfilePopUp";
import { useState } from "react";
import ShortcutPopUp from "./Shortcut_pop_up/ShortcutPopUp";
const Navber = () => {
    // states 
    const [showProfiePopUp, setShowprofilePopUp] = useState(false)
    const [showSortcutPopUp, setshowSortcutPopUp] = useState(false)
    return (
        <>
            <div className="flex justify-between items-center mx-10 box-border px-8 shadow-xl py-6">
                <div className="flex justify-start items-center gap-4">
                    <IoIosMenu className="text-3xl text-gray-600 mt-1 cursor-pointer" />
                    <p className="text-2xl">
                        Dashboard
                    </p>
                </div>
                <div className="flex justify-end items-center gap-4">
                    <FaUserGroup className="text-2xl text-gray-600 mt-1 cursor-pointer" />
                    <FaStore className="text-2xl text-gray-600 mt-1 cursor-pointer" />
                    <CgMenuGridO onClick={() => {
                        setShowprofilePopUp(false)
                        setshowSortcutPopUp(!showSortcutPopUp)
                    }} className="text-2xl text-gray-600 mt-1 cursor-pointer" />
                    <img onClick={() => {
                        setShowprofilePopUp(!showProfiePopUp)
                        setshowSortcutPopUp(false)
                    }} className="w-8 h-8 rounded-full cursor-pointer" src={avater} alt="profile pic" />
                </div>
            </div>
            <ProfilePopUp showProfiePopUp={showProfiePopUp} />
            <ShortcutPopUp showSortcutPopUp={showSortcutPopUp} />
        </>
    )
}

export default Navber
