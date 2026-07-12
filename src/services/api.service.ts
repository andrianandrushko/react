import type {ICars} from "../models/ICars.ts";
import axios from "axios";

const carsUrl = "http://bigbird.space/carsAPI/v1/cars";


export const getCars = async () => {
    const response = await axios.get<ICars[]>(carsUrl);
    return response.data;
};

export const CreateCar = async (car: ICars): Promise<ICars> => {
    const response = await axios.post<ICars>(carsUrl,car)
    return response.data
}


