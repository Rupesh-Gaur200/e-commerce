import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from 'react-router-dom'


import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'




function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
      

    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/> 
      <Footer></Footer>
    </>
  )
}

export default App
