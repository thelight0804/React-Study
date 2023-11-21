import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Modal from './Modal';
import styles from './RecipesList.module.css';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

function RecipeList({isModal, onHideModal}) {
  var [recipes, setRecipes] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // 로딩 여부

  useEffect(()=>{
    async function getRecipes() {
      setIsFetching(true); // 로딩 시작
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setRecipes(resData.posts);
      setIsFetching(false); // 로딩 끝
    }

    getRecipes();
  }, [])

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
      
      {!isFetching && recipes.length > 0 && (
        <ul className={styles.recipes}>
          {recipes.map((recipe) => 
            <Recipe key={recipe.body} menu={recipe.menu} body={recipe.body} />
          )}
        </ul>
      )}
      {!isFetching && recipes.length === 0 && (
        <div style={{textAlign: 'center', color: '#411c05'}}>
        <h2>등록된 레시피가 없습니다.</h2>
        <p>첫 번째 레시피를 등록해 보세요!</p>
        </div>
      )}
      {isFetching && (
        <div style={{textAlign: 'center', color: '#411c05'}}>
        <p>로딩중...</p>
        </div>
      )}
      {/* {isFetching && (
        <ClimbingBoxLoader
          color={'#432a1b'}
          loading={isFetching}
          cssOverride={{margin: "0 auto"}}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )} */}
    </>
  );
}

export default RecipeList;