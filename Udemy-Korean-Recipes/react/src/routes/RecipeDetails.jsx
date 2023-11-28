import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './RecipeDetails.module.css';

function RecipeDetails() {
  const recipe = useLoaderData();

  if (!recipe) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>레시피를 찾을 수 없습니다.</h1>
          <p>
            <Link to=".." className={classes.btn}>
              확인
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.menu}>{recipe.menu}</p>
        <p className={classes.body}>{recipe.body}</p>
      </main>
    </Modal>
  );
}

export default RecipeDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const resData = await response.json();
  return resData.post;
}