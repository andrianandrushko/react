import {useEffect, useState} from "react";
import type {IProducts} from "../models/IProducts.ts";
import {getProducts} from "../services/api.service.ts";

const ProductsComponents = () => {
    const [products,setProducts] = useState<IProducts[]>([])
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])
    return (
        <div>
            {
                products.map(comment => <div key={comment.id}>item={comment.id}</div>)
            }
        </div>
    )
}
export default ProductsComponents;