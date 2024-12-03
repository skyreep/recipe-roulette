import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Single Roulette</Link> | 
            <Link to="/menu-roulette">Menu Roulette</Link> | 
            <Link to="/recipe-box">Recipe Box</Link> | 
            <Link to="/grocery-list">Grocery List</Link> | 
            <Link to="/saved-menus">Saved Menus</Link>
        </nav>
    );
};

export default Navbar;
