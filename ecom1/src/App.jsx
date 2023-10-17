import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from 'react-router-dom'


import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Deliver from './Component/Deliver'
import Contact from './Component/Contact'




function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/Deliver' element={<Deliver/>}/>
       <Route path='/Contact' element={<Contact/>}/>

    </Route>
  ))
 

  return (
    <>
       <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
      <Footer />
    </div>
    </>
  )
}

export default App
