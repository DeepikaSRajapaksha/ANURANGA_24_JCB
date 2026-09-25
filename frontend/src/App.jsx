import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CornerParticles from "./Components/CornerParticles/CornerParticles";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="app">

      <CornerParticles />

      <NavBar />

      <main className="page-content">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default App;