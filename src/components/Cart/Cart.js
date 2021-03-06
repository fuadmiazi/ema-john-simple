import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++)
    {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15)
    {
        shipping = 4.99;
    }
    else if(cart.length == 0)
    {
        shipping = 0;
    }

    const vat = total/10;
    const grandTotal = (total + shipping + Number(vat)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Vat: {formatNumber(vat)}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;