import React from 'react'
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Product from './components/Product';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

