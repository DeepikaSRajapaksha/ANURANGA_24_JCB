import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Machine from './pages/Machine/Machine.jsx';
import Services from './pages/Services/Services.jsx';
import Login from './pages/Login/Login.jsx';

const router = createBrowserRouter([
  {path: "/",element: <App />,
    children: [
      {path: "/",element: <Home />},
      {path: "about",element: <About />},
      {path: "contact",element: <Contact />},
      {path: "machine",element: <Machine />},
      {path: "services",element: <Services />},
    ]
  },
  {path: "login",element: <Login />},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
