import { GiCook, GiPencil } from 'react-icons/gi';
import styles from './MainHeader.module.css';

function MainHeader({onShowModal}){
    return(
        <header className={styles.header}>
            <GiCook size={70} color='#ad6e47'/>
            <h1 className={styles.logo}>Korean Recipes</h1>
            <p>
                <button className={styles.button} onClick={onShowModal}>
                    <GiPencil />
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;