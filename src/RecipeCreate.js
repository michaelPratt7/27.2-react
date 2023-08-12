import React, { useState } from "react";

function RecipeCreate({onAddRecipe, newRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState(initialFormState)
  
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddRecipe(formData);
    setFormData(initialFormState);
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
              
              <input 
               id="name"
               name="name"
               type="text"
               placeholder="Name"
               onChange={handleFormChange}
               value={formData.name}
               />
            </td>
            <td htmlFor="cuisine">
              
              <input
               id="cuisine"
               name="cuisine"
               type="text"
               placeholder="Cuisine"
               onChange={handleFormChange}
               value={formData.cuisine}
               />
            </td>
            <td htmlFor="photo">
              
              <input
               id="photo"
               name="photo"
               role="img"
               type="url"
               placeholder="URL"
               onChange={handleFormChange}
               value={formData.photo}
                />
            </td>
            <td htmlFor="ingredients">
              
              <textarea
               id="ingredients"
               name="ingredients"
               type="text"
               placeholder="Ingredients"
               onChange={handleFormChange}
               value={formData.ingredients}
               />
            </td>
            <td htmlFor="preparation">
              
              <textarea
               id="preparation"
               name="preparation"
               type="text"
               placeholder="Preparation"
               onChange={handleFormChange}
               value={formData.preparation}
               />
            </td>
            <td>
              
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
