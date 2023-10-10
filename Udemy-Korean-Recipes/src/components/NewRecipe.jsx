import styles from "./NewRecipe.module.css";

function NewRecipe({onMenuChange, onBodyChange, onCancel}){
    return(
        <form className={styles.form}>
            <p>
                <label htmlFor="menu">음식 제목</label>
                <input type="text" id="menu" required onChange={onMenuChange}/>
            </p>
            <p>
                <label htmlFor="body">레시피</label>
                <textarea id="body" required rows={3} onChange={onBodyChange}/>
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>취소</button>
                <button>추가</button>
            </p>
        </form>
    );
}

export default NewRecipe;