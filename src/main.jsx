import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Details from './components/Details.jsx'
import Update from './components/Update.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true, Component:App
      },
      {
        path:"/users/:id",
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:Details
      },

      {
        path:"/update/:id",
        Component:Update,
             loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
