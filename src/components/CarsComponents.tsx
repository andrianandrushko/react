import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import type {ICars} from "../models/ICars.ts";

const CarsComponents = () => {
    const [cars, setCars] = useState<ICars[]>([])
    useEffect(() => {
        getCars()
            .then(data => {
                console.log(data)
                setCars(data)
            })
    },[])
    return (
        <>
            {
                cars.map((car, index) => (
                    <div key={index} className='boo'>
                        <p>id:{car.id}</p>
                        <p>brand:{car.brand}</p>
                        <p>price:{car.price}</p>
                        <p>year:{car.year}</p>
                    </div>))
            }
            </>
    );
};

export default CarsComponents;