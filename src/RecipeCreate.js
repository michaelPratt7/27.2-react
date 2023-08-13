import React, { useState } from "react";

function RecipeCreate({onAddRecipe, newRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})
  
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddRecipe(formData);
    setFormData({...initialFormState});
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
               value={formData.name}
               />
            </td>
            <td htmlFor="cuisine">
              Cuisine
              <input
               id="cuisine"
               name="cuisine"
               type="text"
               onChange={handleFormChange}
               value={formData.cuisine}
               />
            </td>
            <td htmlFor="photo">
              Photo
              <input
               id="photo"
               name="photo"
               role="img"
               type="url"
               placeholder="img"
               onChange={handleFormChange}
               value={formData.photo}
                />
            </td>
            <td htmlFor="ingredients">
              Ingredients
              <textarea
               id="ingredients"
               name="ingredients"
               type="text"
               onChange={handleFormChange}
               value={formData.ingredients}
               />
            </td>
            <td htmlFor="preparation">
              Preparation
              <textarea
               id="preparation"
               name="preparation"
               type="text"
               onChange={handleFormChange}
               value={formData.preparation}
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
