import './App.css'
import {Home} from "./Pages/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import {Portfolio} from "./Pages/Portfolio.jsx";
import NousContacter from "./Pages/Nous contacter.jsx";
import Reglement from "./Pages/Règlement.jsx";

function App() {

  return (
    <>
        <header>
            <h1>Harry PoCraft</h1>
            <nav>
                <NavLink to="">Accueil</NavLink>
                <NavLink to="portfolio">Portfolio</NavLink>
                <NavLink to="reglement">Règlement intérieur</NavLink>
                <NavLink to="contact">Nous contacter</NavLink>
            </nav>
        </header>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="contact" element={<NousContacter/>}/>
            <Route path="reglement" element={<Reglement/>}/>
        </Routes>
        <footer>
            <a href="https://discord.gg/c5sUqgQre2" target="_blank" rel="noreferrer"><FaDiscord /></a>
        </footer>
    </>
  )
}

export default App
