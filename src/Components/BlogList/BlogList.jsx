import './scrollbar.css'
const BlogList = () => {
    return (
        <div className="my-10  ">
            <h1 className="my-4 text-2xl font-semibold">Blog List</h1>
            <div className="p-5 border w-[90%] mx-auto">

                <div className="border flex justify-between bg-slate-100 my-5">
                    <button className="p-2 bg-green-500 px-4 text-white">All</button>
                    <button className="p-2 bg-green-500 px-4 text-white">New Blog</button>
                </div>

                <div className="overflow-x-scroll lg:overflow-x-hidden">
                    <table className="w-full ">
                        <thead className="">
                            <tr>
                                <th className="border-2 p-3 bg-gray-100" scope=" ">BLOG IMAGE</th>
                                <th className="border-2 p-3 bg-gray-100">BLOG DESCRIPTION</th>
                                <th className="border-2 p-3 bg-gray-100">STATUS</th>
                                <th className="border-2 p-3 bg-gray-100">CREATED</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="border-2 p-3">
                                    <div className="flex justify-center">
                                        <img className="w-36" src="https://redinvoice.com/uploads/blog_img/1712127417.jpg" alt="" />
                                    </div>
                                    <div className="">
                                        <p
                                            style={{
                                                visibility: 'hidden',
                                                ':hover': { visibility: 'visible' }
                                            }}
                                            className="text-center border  ">
                                            <span className="text-blue-600 font-bold">Edit</span> | <span className="text-yellow-400 font-bold">Inactive</span>
                                        </p>
                                    </div>
                                </td>
                                <td className="border-2 p-3">
                                    <div>
                                        <p><span className="font-bold">Title : </span> Blog</p>
                                        <p><span className="font-bold">Description : </span> asds</p>
                                    </div>
                                </td>
                                <td className="border-2 p-3"> 1</td>
                                <td className="border-2 p-3">
                                    <span className=" px-2 text-white bg-green-700 rounded-xl">
                                        Active
                                    </span>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default BlogList