import React from 'react';


// let Product = ({upgrade}) => {
//     return (
//         <div>
//             <div className="btn" onClick={() => add(Products.image.title.price)}>
//                 Go back
//             </div>
//
//             <div className="btn" onClick={() => upgrade(1)}>
//                 2x Click (price 100$)
//             </div>
//             <div className="btn" onClick={() => upgrade(2)}>
//                 5x Click (price 500$)
//             </div>
//             <div className="btn" onClick={() => upgrade(3)}>
//                 10x Click (price 1000$)
//             </div>
//             <div className="btn" onClick={() => upgrade(4)}>
//                 new background (price 300$)
//             </div>
//             <div className="btn" onClick={() => upgrade(5)}>
//                 new cookie (price 200$)
//             </div>
//             <div className="btn" onClick={() => upgrade(6)}>
//                 cookie spin (price 400$)
//             </div>
//             <div className="btn" onClick={() => upgrade(7)}>
//                 helper (600$)
//             </div>
//         </div>


const Product = ({item, buyProduct}) => {
    return (
        <div className="product">
            <img src={item.image} alt="asdasd"/>
            <div> {item.title}</div>
            <div> Price: {item.price}</div>
            {buyProduct && <div className="btn" onClick={() => buyProduct(item.id)}>Buy</div>}

        </div>




    );
};

export default Product;