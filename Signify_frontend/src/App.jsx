import Services from "./pages/services/Services"
import Authentication from "./pages/authentication/Authentication"
import Home from "./pages/home/Home"
import { BrowserRouter as Route, Navigate, Routes, Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export default function App() {

  const [currentUser, currentUserTrigger] = useState(null);

  useEffect(() => {

    const getCurrentUser = async () => {
      try {
        const response = await axios.post('http://localhost:8800/getCurrentUser', {});
        console.log(response.data.message , " is logged in!! ");
        currentUserTrigger(response.data.message);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getCurrentUser();

    return () => {
      // Clean-up tasks or subscriptions can be performed here
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser ? <Home/> : <Authentication/>,
    },
    {
      path: "/authenticate",
      element: !currentUser ? <Authentication/> : <Home/>,
    },
    {
      path: "/services",
      element: !currentUser ? <Authentication/> : <Services/>,
    }
  ]);

  return (

    <RouterProvider router={router}/>
  
    );
}