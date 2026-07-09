import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserCarts} from "../services/api.service.ts";
import type {ICarts} from "../Carts-models/ICarts.ts";


const CartsPage = () => {
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
                carts.map((cart, index) => (
                    <div key={index}>
                        <div className="row">
                        <p>id: {cart.id}</p>
                        <p>Total: {cart.total}</p>
                        <p>Total products: {cart.totalProducts}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CartsPage;