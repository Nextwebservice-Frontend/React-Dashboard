import Navber from "../../Components/dashboard/Navber/Navber";
import Notice from "../../Components/dashboard/Notice/Notice";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col lg:mx-5 xl:mx-10 mx-auto ">
            <Navber />
            <Notice />
        </div>
    );
};

export default Home;