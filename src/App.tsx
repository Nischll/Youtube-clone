import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { lazy } from 'react'
import './App.css'

const Web = lazy(()=>import("./code-part/site"))
function App() {

  return (
    <>
      <RouterProvider router = {createBrowserRouter([
        {
          path:"/code-part/youtube",
          element:<Web/>
        }
      ])}/>
    </>
  )
}

export default App
