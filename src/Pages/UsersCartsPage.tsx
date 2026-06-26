import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserCarts} from "../services/api.service.ts";
import type {ICarts} from "../models/ICarts.ts";


const UsersCartsPage = () => {
    const [carts, setCarts] = useState<ICarts[]>([]);
    const {id} = useParams();
    useEffect(() => {
        if(id){
            getUserCarts(+id)
                .then(response => {
                    setCarts(response);
                });
        }
    }, [id]);

    return (
        <div>
            {
                carts.map(cart => (
                    <div key={cart.id}>
                        <p>id: {cart.id}</p>
                        <p>Total: {cart.total}</p>
                        <p>Total products: {cart.totalProducts}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersCartsPage;