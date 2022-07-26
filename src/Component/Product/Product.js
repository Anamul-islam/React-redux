import React from 'react';

const Product = (props) => {
    const {pd,addToCart} = props;
    const {name,id} = pd
    return (
        <div style={{border:'1px solid red',margin:'10px 20px'}}>
            <h2>{name}</h2>
            <button onClick={() => addToCart(id)}>add to cart</button>
        </div>
    );
};

export default Product;