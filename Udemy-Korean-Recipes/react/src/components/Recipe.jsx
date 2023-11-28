import { Link } from 'react-router-dom';
import styles from './Recipe.module.css';

function Recipe({id, menu, body}) {

  return (
    <li className={styles.recipe}>
      <Link to={id}>
        <p className={styles.menu}>{menu}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Recipe;
