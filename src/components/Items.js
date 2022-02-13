import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addToInventory} from "../features/trade";

const Items = ({drop, removeItem}) => {
    const char = useSelector((state) => state.character.value.character)
    const inventory = useSelector((state) => state.character.value.inventory)

    const dispatch = useDispatch()

    function add(item, index) {
        if(char.inventorySlots > inventory.length) {
            dispatch(addToInventory(item))
            removeItem(index)
        }
    }

    return (
        <div className="d-flex wrap Items">
            {drop.map((x, i) => <div key={i} onClick={() => add(x, i)} className="itemSlot">
                <img src={x.image} alt=""/>
                <div>Price: {x.price}</div>
            </div>)}
        </div>
    );
};

export default Items;