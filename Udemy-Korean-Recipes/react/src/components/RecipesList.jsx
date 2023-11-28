// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Recipe from './Recipe';
import styles from './RecipesList.module.css';
import PacmanLoader from "react-spinners/PacmanLoader";

function RecipeList() {
  const recipes = useLoaderData();
  // var [recipes, setRecipes] = useState([]);
  // const [isFetching, setIsFetching] = useState(false); // 로딩 여부

  function setRecipesHandler(recipeData) {
      fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(recipeData),
        headers: {
          'Content-Type': 'application/json'
        }
    });
    setRecipes((recipe) => [recipeData, ...recipe]);
  }

  return (
    <>
      {recipes.length > 0 && (
        <ul className={styles.recipes}>
          {recipes.map((recipe) => 
            <Recipe key={recipe.body} menu={recipe.menu} body={recipe.body} />
          )}
        </ul>
      )}
      {recipes.length === 0 && (
        <div style={{textAlign: 'center', color: '#411c05'}}>
        <h2>등록된 레시피가 없습니다.</h2>
        <p>첫 번째 레시피를 등록해 보세요!</p>
        </div>
      )}
    </>
  );
}

export default RecipeList;