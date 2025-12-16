import React from 'react'
import { RouterProvider } from 'react-router'
import router from './auth/Router/Router.jsx'

function App() {


  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
