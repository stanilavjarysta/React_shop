import React from 'react';
import Product from "./Product";


// const Home = ({changeWindow}) => {
//     return (
//         <div className="btn" onClick={ () => changeWindow(2)}>
//             Start Game
//         </div>
//     );
// };
const Home = ({money, products, image, title}) => {
    return (
        <div className="userComp">
            <div className="userTop d-flex space-btw">
                <img className="userImage" src={image} alt=""/>
                <div className="grow1">
                    <h2>Money: {money}</h2>
                    <h2>Products: {products.length}</h2>
                    <h2>Products: {title.length}</h2>
                </div>
            </div>

            <div className="d-flex f-wrap">
                {products.map((x, index) => <Product buyProduct={false} item={x} key={index}/>)}
            </div>

        </div>
    );
};

export default Home;