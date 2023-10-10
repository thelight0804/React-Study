import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Modal from './Modal';
import styles from './RecipesList.module.css';
import { useState } from 'react';

function RecipeList({isModal, onHideModal}) {
    var [enteredBody, setEnteredBody] = useState("");
    var [enteredMenu, setEnteredMenu] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function menuChangeHandler(event) {
        setEnteredMenu(event.target.value);
    }

    return (
        <>
            {isModal && (
                <Modal onHideModal={onHideModal}>
                    <NewRecipe
                        onBodyChange={bodyChangeHandler}
                        onMenuChange={menuChangeHandler}
                        onCancel={onHideModal}
                    />
                </Modal>
            )}
            <ul className={styles.recipes}>
                <Recipe menu={enteredMenu} body={enteredBody} />
                <Recipe menu={"야채 비빔밥"} body={"아삭한 상추"} />
                <Recipe menu={"초콜릿 비빔밥"} body={"고추장 대신 누텔라"} />
                <Recipe menu={"고기 비빔밥"} body={"돼지고기 보다는 소고기"} />
            </ul>
        </>
    );
}

export default RecipeList;