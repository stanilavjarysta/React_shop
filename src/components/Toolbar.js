import React from 'react';
import Product from "./Product";

const Shopping = ({products, buy, changeWindow}) => {
    return (


        <div className="d-flex f-wrap grow1">
            {products.map(x => <Product buyProduct={buy} item={x} key={x.id}/>)}

        <div className="btn" onClick={() => changeWindow(1)}>Home</div>
            <div className="btn" onClick={() => changeWindow(3)}>Product</div>
    </div>

    );
};

export default Shopping;