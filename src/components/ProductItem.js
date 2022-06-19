import React from "react";
import "../Products.css";

const ProductItem = ({ product }) => {
    return (
        <div>
            <ul className="product-item">
            <li><h3>{product.name}</h3></li>   
            <li><img src={product.image} alt={product.name}/></li>
                <p>{product.description}</p>
                <p>{"Precio: $" + product.price}</p>
            </ul>
        </div>
    );
}

export default ProductItem;