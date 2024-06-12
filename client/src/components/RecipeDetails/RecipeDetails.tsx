import React from "react";
import { Recipe } from "../../types";
import { Button } from "flowbite-react";
import "./RecipeDetails.css";

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="recipe-detail-container">
      <img className="recipe-image" src={recipe.image} alt={recipe.label} />
      <div className="recipe-info">
        <h2 style={{ fontWeight: "650" }}>{recipe.label}</h2>
        <p>{recipe.source}</p>
        <p className="recipe-description">{recipe.cuisineType}</p>
        <p>Calories: ({recipe.calories})</p>
      </div>
      <Button gradientMonochrome="info" className="recipe-button">
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </Button>
    </div>
  );
};

export default RecipeDetails;
