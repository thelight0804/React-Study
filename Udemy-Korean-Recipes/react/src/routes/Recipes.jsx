import './Recipes.css'
import RecipesList from '../components/RecipesList'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


function Recipes() {
    return (
        <>
            <Outlet />
            <main>
                <RecipesList/>
            </main>
        </>
    );
}

export default Recipes
