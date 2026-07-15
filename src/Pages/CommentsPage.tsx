import {useEffect} from "react";
import {loadAuthComments} from "../services/api.service.ts";


const CommentsPage = () => {
    useEffect(() => {
        // функія яка вантажить коментарі
        loadAuthComments()
            .then((comments) => {
                // виводимо в консоль
                console.log(comments);
            }).catch((error) => {
                console.log(error);
        })
    }, []);
    return (
        <div>

        </div>
    );
};

export default CommentsPage;