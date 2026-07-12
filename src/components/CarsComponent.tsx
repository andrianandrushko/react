import type {ICars} from "../models/ICars.ts";


interface IProps{
    car:ICars
}
const CarsComponent = ({car}:IProps) => {
    return (
        <div>
            <p>id:{car.id}</p>
            <p>id:{car.brand}</p>
            <p>id:{car.price}</p>
            <p>id:{car.year}</p>
        </div>
    );
};

export default CarsComponent;