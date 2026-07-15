import {useEffect} from "react";
import {loadAuthQuotes} from "../services/api.service.ts";

const QuotesPage = () => {
    useEffect(() => {
        // функція яка вантажить цитати
        loadAuthQuotes()
            .then((quotes) => {
                // виводимо циати в консоль
                console.log(quotes);

                // якшо буде помилка то виводимо в консоль помилку
            }).catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            Quotes Page
        </div>
    );
};

export default QuotesPage;