import type { ProductComponent as IProd } from "../models/ProductComponent.ts";

interface Props {
    user: IProd;
}

const ProductComponent = ({ user }: Props) => {
    return (
        <div>
            <p>id:{user.id}</p>
            <p>title:{user.title}</p>
            <p>description:{user.description}</p>
            <p>category:{user.category}</p>
            <p>price:{user.price}</p>
            <p>discountPercentage:{user.discountPercentage}</p>
            <p>rating:{user.rating}</p>
            <p>stock:{user.stock}</p>
            <p>tags:{user.tags.join(', ')}</p>
            <p>brand:{user.brand}</p>
            <p>sku:{user.sku}</p>
            <p>weight:{user.weight}</p>
            <p>width:{user.dimensions.width}</p>
            <p>height:{user.dimensions.height}</p>
            <p>depth:{user.dimensions.depth}</p>
            <p>warrantyInformation:{user.warrantyInformation}</p>
            <p>shippingInformation:{user.shippingInformation}</p>
            <p>aavailabilityStatus:{user.availabilityStatus}</p>
            {user.reviews.map((review, index) => (
                <div key={index}>
                    <p>rating:{review.rating}</p>
                    <p>comment:{review.comment}</p>
                    <p>date:{review.date}</p>
                    <p>reviewerName:{review.reviewerName}</p>
                    <p>reviewerEmail:{review.reviewerEmail}</p>
                </div>
            ))}
            <p>returnPolicy:{user.returnPolicy}</p>
            <p>minimumOrderQuantity:{user.minimumOrderQuantity}</p>
            <p>createdAt:{user.meta.createdAt}</p>
            <p>updatedAt:{user.meta.updatedAt}</p>
            <p>barcode:{user.meta.barcode}</p>
            <p>qrCode:{user.meta.qrCode}</p>
            <img src={user.images} alt="images" />
            <img src={user.thumbnail} alt="thumbnail" />
        </div>
    );
};



export default ProductComponent;