import type {IProducts} from "../models/IProducts.ts";

interface Props {
    product: IProducts;
}

const ProductComponent = ({ product }: Props) => {
    return (
        <div className={'cool'}>
                <p>id:{product.id}</p>
                <p>title:{product.title}</p>
                <p>description:{product.description}</p>
                <p>category:{product.category}</p>
                <p>price:{product.price}</p>
                <p>discountPercentage:{product.discountPercentage}</p>
                <p>rating:{product.rating}</p>
                <p>stock:{product.stock}</p>
                <p>tags:{product.tags.join(', ')}</p>
                <p>brand:{product.brand}</p>
                <p>sku:{product.sku}</p>
                <p>weight:{product.weight}</p>
                <p>width:{product.dimensions.width}</p>
                <p>height:{product.dimensions.height}</p>
                <p>depth:{product.dimensions.depth}</p>
                <p>warrantyInformation:{product.warrantyInformation}</p>
                <p>shippingInformation:{product.shippingInformation}</p>
                <p>availabilityStatus:{product.availabilityStatus}</p>
                <p>rating:{product.rating}</p>
                {product.reviews.map((review, index) => (
                    <div key={index}>
                            <p>rating:{review.rating}</p>
                            <p>comment:{review.comment}</p>
                            <p>date:{review.date}</p>
                            <p>reviewerName:{review.reviewerName}</p>
                            <p>reviewerEmail:{review.reviewerEmail}</p>
                    </div>
                ))}
                <p>returnPolicy:{product.returnPolicy}</p>
                <p>minimumOrderQuantity:{product.minimumOrderQuantity}</p>
                <p>createdAt:{product.meta.createdAt}</p>
                <p>updatedAt:{product.meta.updatedAt}</p>
                <p>barcode:{product.meta.barcode}</p>
                <p>qrCode:{product.meta.qrCode}</p>
                <img src={product.images[0]} alt={product.title} />
                <img src={product.thumbnail} alt="thumbnail" />
        </div>
    );
};



export default ProductComponent;