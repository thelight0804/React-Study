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

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
