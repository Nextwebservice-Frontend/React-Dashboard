import BlogList from "../BlogList/BlogList";
import Navber from "../dashboard/Navber/Navber";
import Notice from "../dashboard/Notice/Notice";

const Home = () => {
    return (
        <>
            <Navber />
            <Notice />
            <BlogList />
        </>
    );
};

export default Home;