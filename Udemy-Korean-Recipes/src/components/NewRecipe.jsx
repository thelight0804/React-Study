import styles from "./NewRecipe.module.css";

function NewRecipe(props){
    return(
        <form className={styles.form}>
            <p>
                <label htmlFor="menu">Your menu</label>
                <input type="text" id="menu" required onChange={props.onMenuChange}/>
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </p>
        </form>
    );
}

export default NewRecipe;