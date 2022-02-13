import React from 'react';
import {useSelector} from "react-redux";


const ArenaStat = () => {
    const char = useSelector((state) => state.character.value.character)
    const weapon = useSelector((state) => state.character.value.weapon)

    return (
        <div>
            <div>
                <h3>Race: {char.race}</h3>
                <div>Damage: {char.damage}</div>
                <div>Health: {char.health}</div>
                <div>Strength: {char.strength}</div>
                <div>Stamina: {char.stamina}</div>
                <div>Energy: {char.energy}</div>
                <div>Slots: {char.inventorySlots}</div>
                <div>Gold: {char.gold}</div>
            </div>
            <div className="slot">
                {weapon && <img src={weapon.image} alt=""/>}
            </div>
        </div>
    );
};

export default ArenaStat;