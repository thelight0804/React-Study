import React from 'react'
import ReactDOM from 'react-dom/client'
import Recipes, {loader as recipesLoader} from './routes/Recipes.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewRecipe, {action as newRecipeAction} from './routes/NewRecipe.jsx'
import RootLayout from './routes/RootLayout.jsx'
import RecipeDetails, {loader as recipeDetailsLoader} from './routes/RecipeDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Recipes />,
        loader: recipesLoader,
        children: [
          { path: "/create-recipe", element: <NewRecipe />, action: newRecipeAction },
          { path: "/:id", element: <RecipeDetails />, loader: recipeDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
