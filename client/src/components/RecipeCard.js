import React from "react";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>Category: {recipe.category}</p>
            <p>Rating: {recipe.rating} ★</p>
        </div>
    );
};

export default RecipeCard;
