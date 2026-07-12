import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserCarts} from "../services/api.service.ts";
import type {ICarts} from "../models/ICarts.ts";
import CartsComponent from "./CartsComponent.tsx";


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
                carts.map(cart => (
                    <CartsComponent key={cart.id} cart={cart}/>
                ))
            }
        </div>
    );
};

export default CartsPage;