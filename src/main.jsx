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
import History from './pages/history/history.jsx';
import Withdraw from './pages/withdraw/withdraw.jsx';
import Confirm from './pages/withdraw/confirm.jsx';
import ConfirmDeposit from './pages/deposit/confirm-deposit.jsx';
import PrivateRoute from './utils/private_routes.jsx';

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
        element: <PrivateRoute component={<Dashboard/>} />
      },
      {
        path: "/deposit",
        element: <PrivateRoute component={<Deposit/>} />
      },
      {
        path: "/buy-plan",
        element: <PrivateRoute component={<Plan/>} />
      },
      {
        path: "/account",
        element: <PrivateRoute component={<Profile/>} />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
       {
        path: "/payment",
         element: <PrivateRoute component={<Payment/>} />
      },
      {
        path: "/transactions",
        element: <PrivateRoute component={<History/>} />
      },
      {
        path: "/withdraw",
        element: <PrivateRoute component={<Withdraw/>} />
      },
      {
        path: "/confirm-withraw",
        element: <PrivateRoute component={<Confirm/>} />
      },
      {
        path: "/fund-account",
        element: <PrivateRoute component={<ConfirmDeposit/>} />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
