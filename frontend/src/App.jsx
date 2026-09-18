import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <NavBar />
           
            <Outlet /> 

            <Footer />
        </div>
    );
}

export default App;