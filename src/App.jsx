

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Pages/Home/Home'
import Houses from './Pages/Houses/Houses'
import SliderHouse from './Pages/SliderHouse/SliderHouse'
import HouseDetails from './Pages/HouseDetails/HouseDetails'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/houses',
          element:<Houses></Houses>
        },
        {
          path:'/sliderhouse',
          element:<SliderHouse></SliderHouse>
        },
        {
          path:'/housedetails',
          element:<HouseDetails></HouseDetails>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
