import React from "react";
import { Recipe } from "../types";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeDetails key={recipe.url} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
