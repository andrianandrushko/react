import {Outlet} from "react-router-dom";
import PostsComponents from "../components/PostsComponents.tsx";

const PostsPage = () => {
    return (
        <div>
            <PostsComponents/>
                <Outlet/>
        </div>
    );
};

export default PostsPage;