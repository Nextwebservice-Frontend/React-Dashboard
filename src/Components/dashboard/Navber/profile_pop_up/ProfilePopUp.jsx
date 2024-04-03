import avater from '../../../../assets/avator.jpg'
import pepole from '../../../../assets/5509366.png'
import { MdOutlineLogout } from "react-icons/md";
const ProfilePopUp = ({showProfieOptions}) => {
    return (
        <div className={`p-4 shadow mt-10 pr-24 absolute right-10 top-9 bg-white ${showProfieOptions ? "popup":"hidden"}`}>
            <div className=' flex justify-start items-center p-4 gap-3'>
                <img className="w-8 h-8 rounded-full cursor-pointer" src={avater} alt="" />
                <span>
                    <p className='text-gray-500'>superaadmin</p>
                    <p className='text-gray-500 text-sm'>superaadmin</p>
                </span>
            </div>
            <hr  className='my-3 w-full'/>
            <div className='p-4'>
                <button className='flex justify-start items-center gap-3 mb-3 text-gray-500 text-xl'>
                    <img className="w-6 h-6 rounded-full cursor-pointer" src={pepole} alt="" />
                    pepole
                </button>
                <button className='flex justify-start items-center gap-3 text-gray-500 text-xl'>
                    <MdOutlineLogout className='text-2xl'/>
                    pepole
                </button>
            </div>
        </div>
    )
}

export default ProfilePopUp
