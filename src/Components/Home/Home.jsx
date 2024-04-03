import Navber from "../dashboard/Navber/Navber";
import Notice from "../dashboard/Notice/Notice";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col lg:mx-5 xl:mx-10 mx-auto w-full">
            <Navber />
            <Notice />
        </div>
    );
};

export default Home;