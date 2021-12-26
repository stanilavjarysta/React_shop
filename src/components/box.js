import React from 'react';

const Product = ({product, add}) => {
    function countTotal() {
        let sum = 0
        product.map(x => sum += x.price * x.quantity)
        return sum
    }
    return (
        <div>
            <h1>Total Sum: {countTotal()}</h1>
            {product.map((x, index) => <div className="d-flex" key={index}>
            <img src={x.image} alt=""/>
             <div>
                <h1>{x.title}</h1>
                <h2>Price: {x.price}</h2>
                <h2>Quantity: {x.quantity}</h2>
                <button onClick={()=> add(true, index)}>Add</button>
                <button onClick={()=> add(false, index)}>Remove</button>
                </div>
             </div>)}
        </div>
    );
};

export default Product;