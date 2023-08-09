import React, { useState } from "react";

function RecipeCreate({onAddPost, newRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})
  
  const handleFormChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddPost({formData});
    setFormData(...initialFormState);
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={handleFormSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              Name
              <input 
               id="name"
               name="name"
               type="text"
               onChange={handleFormChange}
               value={newRecipe.name}
               />
            </td>
            <td htmlFor="cuisine">
              Cuisine
              <input
               id="cuisine"
               name="cuisine"
               type="text"
               onChange={handleFormChange}
               value={newRecipe.cuisine}
               />
            </td>
            <td htmlFor="photo">
              Photo
              <input
               id="photo"
               name="photo"
               type="url"
               onChange={handleFormChange}
               value={newRecipe.photo}
               />
            </td>
            <td htmlFor="ingredients">
              Ingredients
              <textarea
               id="ingredients"
               name="ingredients"
               type="text"
               onChange={handleFormChange}
               value={newRecipe.ingredients}
               />
            </td>
            <td htmlFor="preparation">
              Preparation
              <textarea
               id="preparation"
               name="preparation"
               type="text"
               onChange={handleFormChange}
               value={newRecipe.preparation}
               />
            </td>
            <td>
              Actions
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
