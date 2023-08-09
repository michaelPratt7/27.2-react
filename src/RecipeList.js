import React from "react";

function RecipeList({posts, onDeletePost}) {
 
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handlePostDelete = (post) => onDeletePost(post.id)
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((post, index) => (
            <tr id={index} className="recipe">
              <td>{post.name}</td>
              <td>{post.cuisine}</td>
              <td>{post.photo}</td>
              <td>{post.ingredients}</td>
              <td>{post.preparation}</td>
              <button name="delete" onClick={handlePostDelete}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
