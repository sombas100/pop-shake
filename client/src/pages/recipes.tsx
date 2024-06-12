import React from "react";
import { Recipe } from "../types";
import RecipeList from "../components/RecipeList";

interface RecipesProps {
  recipes: Recipe[];
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
