import React from 'react'
import ReactDOM from 'react-dom/client'
import Recipes from './routes/Recipes.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewRecipe from './routes/NewRecipe.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <Recipes />, children: [
        { path: '/create-recipe', element: <NewRecipe /> },
      ]},
  ] },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
