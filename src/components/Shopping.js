import React from 'react';
import Product from "./Product";

// const Shopping = ({changeWindow, points, cookieClick, cookie, spin}) => {
//     return (
//         <div>
//             <div className="btn" onClick={() => changeWindow(3)}>Shop</div>
//             <img className={spin ? "spin" : ""} onClick={cookieClick} src={cookie} alt=""/>
//             <h1>Points: {points}</h1>
//         </div>
//     );
// };
const Shopping = ({products, buy}) => {
    return (
        <div className="d-flex f-wrap grow1">
            {products.map(x => <Product buyProduct={buy} item={x} key={x.id}/>)}
        </div>
    );
};

export default Shopping;