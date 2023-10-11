import styles from './Recipe.module.css';

function Recipe({menu, body}) {

    return (
        <li className={styles.recipe}>
            <p className={styles.menu}>{menu}</p>
            <p className={styles.text}>{body}</p>
        </li>
    );
}

export default Recipe;
