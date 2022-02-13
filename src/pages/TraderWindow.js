import React from 'react';
import Shoping from "../components/Shoping";
import Inventory from "../components/Inventory";

const TraderWindow = () => {
    return (
        <div className="d-flex">
            <Shoping/>
            <Inventory/>
        </div>
    );
};

export default TraderWindow;