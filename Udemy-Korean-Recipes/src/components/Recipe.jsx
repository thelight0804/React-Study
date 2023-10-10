import styles from './Recipe.module.css';

const menu = ['참치 비빔밥', '야채 비빔밥']

function Recipe({menu, body}) {

    return (
        <li className={styles.recipe}>
            <p className={styles.menu}>{menu}</p>
            <p className={styles.text}>{body}</p>
        </li>
    );
}

export default Recipe;
