import type {ICarts} from "../models/ICarts.ts";

interface Props{
    cart:ICarts
}

const CartsComponent = ({cart}:Props) => {
    return (
        <div>
            <div className="row">
                <p>id: {cart.id}</p>
                <p>Total: {cart.total}</p>
                <p>Total products: {cart.totalProducts}</p>
            </div>
        </div>
    );
};

export default CartsComponent;