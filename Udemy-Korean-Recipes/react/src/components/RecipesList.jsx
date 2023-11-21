import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Modal from './Modal';
import styles from './RecipesList.module.css';
import { useState } from 'react';

function RecipeList({isModal, onHideModal}) {
  var [recipes, setRecipes] = useState([]);

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
      {isModal && (
        <Modal onHideModal={onHideModal}>
          <NewRecipe
            onCancel={onHideModal}
            onSetRecipe={setRecipesHandler}
          />
        </Modal>
      )}
      
      {recipes.length > 0 ? (
        <ul className={styles.recipes}>
          {recipes.map((recipe) => 
            <Recipe key={recipe.body} menu={recipe.menu} body={recipe.body} />
          )}
        </ul>
      ) : (
        <div style={{textAlign: 'center', color: '#411c05'}}>
            <h2>등록된 레시피가 없습니다.</h2>
            <p>첫 번째 레시피를 등록해 보세요!</p>
        </div>
      )}
    </>
  );
}

export default RecipeList;