import { Link } from "react-router-dom";
import { products } from "../data";

function Products() {
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} -
                        <Link to={`/products/${product.id}`}>More Info</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
