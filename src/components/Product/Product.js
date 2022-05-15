import React from 'react';


import './Product.css';

const Product = (props) => {
    console.log(props);
    const {  name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>

                <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <i class="fa-solid fa-cart-circle-plus"></i>add to cart</button>
            </div>
        </div>

    );
};

export default Product;