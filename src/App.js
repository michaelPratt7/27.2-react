import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeView from "./RecipeView";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const [posts, setPosts] = useState([]);
  const addRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
   );
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate onAddRecipe={addRecipe} newRecipe={recipes} />
    </div>
  );
}

export default App;
