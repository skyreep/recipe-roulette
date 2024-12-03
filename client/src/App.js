import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleRoulette from "./pages/SingleRoulette";
import MenuRoulette from "./pages/MenuRoulette";
import RecipeBox from "./pages/RecipeBox";
import GroceryList from "./pages/GroceryList";
import SavedMenus from "./pages/SavedMenus";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<SingleRoulette />} />
                <Route path="/menu-roulette" element={<MenuRoulette />} />
                <Route path="/recipe-box" element={<RecipeBox />} />
                <Route path="/grocery-list" element={<GroceryList />} />
                <Route path="/saved-menus" element={<SavedMenus />} />
            </Routes>
        </Router>
    );
};

export default App;
