import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Details from './components/Details.jsx'

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
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
