import Modal from '../components/Modal'
import styles from "./NewRecipe.module.css";
import { Link, Form, redirect } from 'react-router-dom';

function NewRecipe(){
    return (
        <Modal>
            <Form method='post' className={styles.form}>
                <p>
                    <label htmlFor="menu">음식 제목</label>
                    <input type="text" id="menu" name="menu" required
                    />
                </p>
                <p>
                    <label htmlFor="body">레시피</label>
                    <textarea id="body" name="body" required rows={3}
                    />
                </p>
                <p className={styles.actions}>
                    <Link to="/" type="button">
                        취소
                    </Link>
                    <button>추가</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewRecipe;

export async function action({request}) {
  const formData = await request.formData();
  const recipeData = Object.fromEntries(formData); // {menu: '...', body: '...'}
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(recipeData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  return redirect('/');
}