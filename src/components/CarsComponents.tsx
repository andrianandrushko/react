import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import type {ICars} from "../models/ICars.ts";
import CarsComponent from "./CarsComponent.tsx";

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
                cars.map((car) => (
                    <CarsComponent key={car.id} car={car} />
                ))
            }
            </>
    );
};

export default CarsComponents;