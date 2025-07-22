import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Applayout from './layout/app-layout';
import Home from './pages/home';
import Registration from './pages/Registration';
import EventDetails from './components/EventDetails';

const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/registration",
        element:<Registration/>
      },
    ]
  }
])

function App() {
 return <RouterProvider router={router} />
}

export default App