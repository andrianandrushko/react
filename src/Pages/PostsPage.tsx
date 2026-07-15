import {useEffect} from "react";
import {loadAuthPosts} from "../services/api.service.ts";

const PostsPage = () => {
    useEffect(() => {
        // функція яка вантажить пости
        loadAuthPosts()
            .then((posts) => {
                // виводимо пости в консоль
              console.log(posts);
            })
            // якшо буде помилка то виводимо в консоль помилку
            .catch((err => {
                console.log(err);
            }))
    })
    return (
        <div>

        </div>
    );
};

export default PostsPage;