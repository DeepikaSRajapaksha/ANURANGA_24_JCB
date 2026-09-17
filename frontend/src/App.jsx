import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
    return (
        <div>
            <NavBar />
            <Home />    
            <Footer />
        </div>
    );
}

export default App;