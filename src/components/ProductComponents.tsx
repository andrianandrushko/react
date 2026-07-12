import {useEffect, useState} from "react";
import type {IProducts} from "../models/IProducts.ts";
import {getProducts} from "../services/api.service.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductComponents = () => {
    const [products, setProducts] = useState<IProducts[]>([])
    useEffect(() => {
       getProducts()
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <>
            {
                products.map((product) => (
                    <ProductComponent key={product.id} product={product} />
                   )
                )
            }
        </>
    )
}



export default ProductComponents;