import type {ICars} from "../models/ICars.ts";


interface IProps{
    car:ICars
}
const CarsComponent = ({car}:IProps) => {
    return (
        <div className="cars">
            <p>id:{car.id}</p>
            <p>brand:{car.brand}</p>
            <p>price:{car.price}</p>
            <p>year:{car.year}</p>
        </div>
    );
};

export default CarsComponent;