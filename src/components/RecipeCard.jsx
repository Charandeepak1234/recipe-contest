import React from 'react';
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img
      src={recipe.imgUrl}
      alt={recipe.name}
      className="recipe-image"
      loading="lazy"
    />
    <h2 className="recipe-title">{recipe.name}</h2>
    <p className="recipe-chef">{recipe.chef}</p>
    <p className="recipe-description">{recipe.description}</p>
    <div className="recipe-details">
      <span>⭐ {recipe.avgRating} / 5</span>
      <span>{recipe.mealType}</span>
    </div>
  </div>
);

export default RecipeCard;
