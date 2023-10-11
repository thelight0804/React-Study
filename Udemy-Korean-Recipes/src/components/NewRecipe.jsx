import styles from "./NewRecipe.module.css";
import { useState } from 'react';

function NewRecipe({onCancel, onSetRecipe}){
    var [enteredBody, setEnteredBody] = useState("");
    var [enteredMenu, setEnteredMenu] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function menuChangeHandler(event) {
        setEnteredMenu(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            menu: enteredMenu,
            body: enteredBody
        };
        onSetRecipe(postData);
        onCancel();
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="menu">음식 제목</label>
                <input type="text" id="menu" required onChange={menuChangeHandler}/>
            </p>
            <p>
                <label htmlFor="body">레시피</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>취소</button>
                <button>추가</button>
            </p>
        </form>
    );
}

export default NewRecipe;