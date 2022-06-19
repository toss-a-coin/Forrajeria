import React from "react";
import NavBar from "./NavBar";
import ProductItem from "./ProductItem";
import { products } from "../data/Products";

const Produts = () => {
    return(
        <>
            <NavBar />
            <div className="products">
                {
                    products.map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </div>
        </>
    )
};

export default Produts;