import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from 'react-router-dom'


import Navbar from './Component/Navbar'




function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Navbar/>}/>
      

    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
