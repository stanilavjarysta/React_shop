import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {disarmWeapon} from "../features/trade";


const UserProfile = () => {
    const dispatch = useDispatch()
    const char = useSelector((state) => state.character.value.character)
    const weapon = useSelector((state) => state.character.value.weapon)

    function disarm() {
        if(weapon) dispatch(disarmWeapon())
    }
    return (
        <div>
               <div className="card d-flex column p-20">
                <img src={char.image} alt=""/>
                <h3>Race: {char.race}</h3>
                <p>Damage: {char.damage}</p>
                <p>Health: {char.health}</p>
                <p>Energy: {char.energy}</p>
                <p>Stamina: {char.stamina}</p>
                <p>Strength: {char.strength}</p>
                <p>InventorySlots: {char.inventorySlots}</p>
                <p>Gold: {char.gold}</p>
        </div>
            <div className="slot" onClick={disarm}>
                {weapon && <img src={weapon.image} alt=""/>}
            </div>

        </div>
    );
};

export default UserProfile;