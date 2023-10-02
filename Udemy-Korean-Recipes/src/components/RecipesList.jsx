import Recipe from './Recipe';
import styles from './RecipesList.module.css';

function RecipeList(props) {
    return (
        <ul className={styles.recipes}>
            <Recipe menu={'참치 비빔밥'} body={'고추참치 고추참치'}/>
            <Recipe menu={'야채 비빔밥'} body={'아삭한 상추'}/>
            <Recipe menu={'초콜릿 비빔밥'} body={'고추장 대신 누텔라'}/>
            <Recipe menu={'고기 비빔밥'} body={'돼지고기 보다는 소고기'}/>
        </ul>
    );
}

export default RecipeList;