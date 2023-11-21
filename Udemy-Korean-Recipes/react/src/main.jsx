import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewRecipe from './components/NewRecipe.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/create-recipe', element: <NewRecipe /> },
  ] },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
