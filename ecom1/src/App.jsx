import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from 'react-router-dom'


import Navbar from './Component/Navbar'
import Home from './Component/Home'




function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
      

    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
