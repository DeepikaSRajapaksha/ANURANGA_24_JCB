import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Matchine from './pages/Matchine/Matchine.jsx';
import Services from './pages/Services/Services.jsx';

const router = createBrowserRouter([
  {path: "/",element: <App />,children: [
      {index: true,element: <Home />},
      {path: "about",element: <About />},
      {path: "contact",element: <Contact />},
      {path: "matchine",element: <Matchine />},
      {path: "services",element: <Services />}
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
