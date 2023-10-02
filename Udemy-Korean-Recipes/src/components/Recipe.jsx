import styles from './Recipe.module.css';

const menu = ['참치 비빔밥', '야채 비빔밥']

function Recipe(props) {

    return (
        <li className={styles.recipe}>
            <p className={styles.menu}>{props.menu}</p>
            <p className={styles.text}>{props.body}</p>
        </li>
    );
}

export default Recipe;
