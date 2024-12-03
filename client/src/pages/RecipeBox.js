import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/RecipeBox.css";

const RecipeBox = () => {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            name: "Spaghetti Bolognese",
            category: "Dinner",
            rating: 5,
        },
        {
            id: 2,
            name: "Pancakes",
            category: "Breakfast",
            rating: 4,
        },
    ]);

    return (
        <div>
            <h2>Recipe Box</h2>
            <div>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeBox;
