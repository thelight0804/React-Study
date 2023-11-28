import {Link} from 'react-router-dom';
import { GiCook, GiPencil } from 'react-icons/gi';
import styles from './MainHeader.module.css';

function MainHeader(){
    return(
        <header className={styles.header}>
            <GiCook size={70} color='#ad6e47'/>
            <h1 className={styles.logo}>한국 음식 레시피</h1>
            <p>
                <Link to="/create-recipe" className={styles.button}>
                    <GiPencil />
                    레시피 등록
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;