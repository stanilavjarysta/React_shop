import React from 'react';
import ArenaStat from "./ArenaStat";

const Arena = ({player, item, gameState, healthProgress, energyProgress}) => {

    const emptyTemplate = <div className="arena d-flex a-center">
         </div>

    const template =  <div className="arena">
        <img src={item.image} alt=""/>
        <div className="wrapper">
            <div className="progressHealth" style={{width: healthProgress + "%"}}/>
        </div>
        {player && <div className="wrapper">
            <div className="progressEnergy" style={{width: energyProgress + "%"}}/>
        </div>}
        {player && <ArenaStat/>}

        {!player && <div>
            <h3>Name: {item.name}</h3>
            <div>Max Damage: {item.maxDamage}</div>
            <div>Health: {item.health}</div>
            <div>Max Items Drop: {item.maxItemsDrop}</div>
        </div>}
    </div>

    return (
        <div>
            {!player && gameState === 0 ? emptyTemplate : template}
        </div>
    );
};

export default Arena;