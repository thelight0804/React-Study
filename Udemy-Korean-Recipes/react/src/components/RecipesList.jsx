// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Recipe from './Recipe';
import styles from './RecipesList.module.css';
import PacmanLoader from "react-spinners/PacmanLoader";

function RecipeList() {
  const recipes = useLoaderData();

  return (
    <>
      {recipes.length > 0 && (
        <ul className={styles.recipes}>
          {recipes.map((recipe) => 
            <Recipe key={recipe.id} id={recipe.id} menu={recipe.menu} body={recipe.body} />
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