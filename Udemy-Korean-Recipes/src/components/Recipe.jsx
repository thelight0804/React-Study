import styles from './Recipe.module.css';

const menu = ['참치 비빔밥', '야채 비빔밥']

function Recipe(props) {

    return (
        <div className={styles.recipe}>
            <p>메뉴 : {props.menu}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Recipe;
