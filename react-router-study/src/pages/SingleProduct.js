import { Link, useParams } from "react-router-dom";
import { products } from "../data";

function SingleProduct() {
    const { productId } = useParams();
    console.log('Product ID from URL:', productId); // Debugging line

    const product = products.find((product) => product.id === Number(productId));
    console.log('Found Product:', product); // Debugging line

    if (!product) {
        return <div>Product not found</div>;
    }

    const { thumbnail, title,description,price } = product;
    return (
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{price}</h1>
            <img src={thumbnail} alt={title} />
            <Link to="/products">Back To Products</Link>
        </div>
    );
}

export default SingleProduct;
