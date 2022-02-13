import React from 'react';
import UserProfile from "../components/UserProfile";
import Inventory from "../components/Inventory";

const MainWindow = () => {
    return (
        <div className="d-flex">
            <UserProfile/>
            <Inventory/>
        </div>
    );
};

export default MainWindow;