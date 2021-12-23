import React from 'react';

const Product = ({item, buyProduct, changeWindow}) => {
    return (
        <div className="product">
            <img src={item.image} alt="asdasd"/>
            <div> {item.title}</div>
            <div> Price: {item.price}</div>
            {buyProduct && <div className="btn" onClick={() => buyProduct(item.id)}>Buy</div>}

            <div className="btn" onClick={() => changeWindow(2)}>Shop</div>

        </div>




    );
};

export default Product;