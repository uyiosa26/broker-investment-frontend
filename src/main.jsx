import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/signup/Signup.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Deposit from './pages/deposit/deposit.jsx';
import Plan from './pages/plan/plan.jsx';
import Profile from './pages/profile/profile.jsx';
import About from './pages/about/about.jsx';
import Contact from './pages/contact/contact.jsx';
import Payment from './pages/payment/payment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [

      {index: true, element: <Home/>},

      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Signup/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/deposit",
        element: <Deposit/>
      },
      {
        path: "/buy-plan",
        element: <Plan/>
      },
      {
        path: "/account",
        element: <Profile/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
       {
        path: "/payment",
        element: <Payment />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
