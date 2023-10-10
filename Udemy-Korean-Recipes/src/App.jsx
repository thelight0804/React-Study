import './App.css'
import RecipesList from './components/RecipesList'
import MainHeader from './components/MainHeader';
import { useState } from 'react';


function App() {
    var [modal, setModal] = useState(false);

    function showModal(){
        setModal(true);
    }

    function hideModal(){
        setModal(false);
    }


    return (
        <>
            <MainHeader onShowModal={showModal} />
            <main>
                <RecipesList isModal={modal} onHideModal={hideModal} />
            </main>
        </>
    );
}

export default App
