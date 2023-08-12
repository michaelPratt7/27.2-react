import React from "react";

function RecipeView({ recipe, onDeleteRecipe }) {
  
  const handleRecipeDelete = (recipe) => onDeleteRecipe(recipe.id)
  return (
  <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img className="photo" class="scale-down" src={recipe.photo} /></td>
      <td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td><button name="delete" onClick={handleRecipeDelete}>Delete</button></td>
        </tr>
  )}



export default RecipeView;