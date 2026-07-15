import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {
    useEffect(() => {
        // функція яка вантажить продукти
        loadAuthProducts()
            .then(products => {
                // виводимо в консоль
                console.log(products);

                // якшо буде помилка то виводимо в консоль помилку
            }).catch(error => {
            console.log(error);
            // виконуємо процес оновлення токена
            refresh()
                .then((value) => {
                    // виводимо всі оновлення в консоль
                    console.log(value)
                    loadAuthProducts()
                })
        }) 
    }, []);
    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;