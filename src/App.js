import './App.css';
import {useState} from "react";
import Home from "./components/Home";
import Shopping from "./components/Shopping";


// function App() {
//     const [getWindowNum, setWindowNum] = useState(1)
//
//     function change(num) {
//         setWindowNum(num)
//     }
//
//
//     function buyUpgrade(index) {
//         if(index === 1) {
//             if(getPoints >= 100) {
//                 setPointsToAdd(2)
//                 setPoints(getPoints - 100)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 2) {
//             if(getPoints >= 500) {
//                 setPointsToAdd(5)
//                 setPoints(getPoints - 500)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 3) {
//             if(getPoints >= 1000) {
//                 setPointsToAdd(10)
//                 setPoints(getPoints - 1000)
//                 setWindowNum(2)
//             }
//         }
//         if(index === 4) {
//             if(getPoints >= 300) {
//                 setPoints(getPoints - 300)
//                 setWindowNum(2)
//                 setColor('#ccdaef')
//             }
//         }
//         if(index === 5) {
//             if(getPoints >= 200) {
//                 setPoints(getPoints - 200)
//                 setWindowNum(2)
//                 setCookie("https:png")
//             }
//         }
//         if(index === 6) {
//             if(getPoints >= 400) {
//                 setPoints(getPoints - 400)
//                 setWindowNum(2)
//                 setSpin(true)
//             }
//         }
//     }
//
//     return (
//         <div className="App" style={{backgroundColor: getColor}}>
//             {getWindowNum === 1 && <Home changeWindow={change}/>}
//
//             {getWindowNum === 2 && <Shopping changeWindow={change}
//                                          cookie={getCookie}
//                                          points={getPoints}
//                                          spin={getSpin}
//                                          cookieClick={addPoints}/>}
//
//             {getWindowNum === 3 && <Product changeWindow={change} upgrade={buyUpgrade}/>}
//         </div>
//     );
// }

function App() {
    const items = [
        {
        image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
        title: "green chair",
        price: 35.35,
        id: 0
    },
    {
        image: "data:image/jpeg;base64,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",
        title: "simple chair",
        price: 19.99,
        id: 1
    },
    {
        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
        title: "fotelis chair",
        price: 55,
        id: 2
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
        title: "Boss chair",
        price: 128,
        id: 3
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
        title: "king chair",
        price: 88.25,
        id: 4
    },
    ]
    const [getMoney, setMoney] = useState(500)
    const [getHomeProducts, setHomeProducts] = useState([])
    const [getTitle, setTitle] = useState([])


    const profileImages = [
        "https://images.emojiterra.com/twitter/v13.1/512px/1f610.png",
           ]

    function buyProduct(id) {
        if(getMoney >= items[id].price) {
            setMoney(getMoney - items[id].price)
            setHomeProducts([...getHomeProducts, items[id]])
            setTitle([...getTitle, items[id]])
            // ARBA
            // const prods = getUserProducts
            // prods.push(items[id])
            // setUserProducts(prods)
        }
    }


    return (
        <div className="App d-flex" >
            <Home image={profileImages[getHomeProducts]} title={getTitle} money={getMoney} products={getHomeProducts}/>
            <Shopping buy={buyProduct} products={items}/>
        </div>
    );
}

export default App;
