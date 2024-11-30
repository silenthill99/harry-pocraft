import {Home} from "./Pages/Home.js";
import {NavLink, Route, Routes} from "react-router-dom";
import {FaDiscord} from "react-icons/fa";
import {Portfolio} from "./Pages/Portfolio.js";
import NousContacter from "./Pages/Nous contacter.js";
import Reglement from "./Pages/Règlement.js";
import {SiFandom} from "react-icons/si";

function App() {

    return (
        <>
            <header className={"border-b-2 border-black"}>
                <div className={"container mx-auto flex items-center justify-between"}>
                    <h1>Harry PoCraft</h1>
                    <nav>
                        <NavLink to=""
                                 className={(nav) => (nav.isActive ? " border-x border-black hover:underline px-2" : "hover:underline px-2")}>Accueil</NavLink>
                        <NavLink to="portfolio"
                                 className={(nav) => (nav.isActive ? " border-x border-black hover:underline px-2" : "hover:underline px-2")}>Portfolio</NavLink>
                        <NavLink to="reglement"
                                 className={(nav) => (nav.isActive ? " border-x border-black hover:underline px-2" : "hover:underline px-2")}>Règlement
                            intérieur</NavLink>
                        <NavLink to="contact"
                                 className={(nav) => (nav.isActive ? " border-x border-black hover:underline px-2" : "hover:underline px-2")}>Nous
                            contacter</NavLink>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="contact" element={<NousContacter/>}/>
                <Route path="reglement" element={<Reglement/>}/>
            </Routes>
            <footer className={"container mx-auto flex"}>
                <a href="https://discord.gg/c5sUqgQre2" target="_blank" rel="noreferrer"><FaDiscord/></a>
                <a href="https://harrypotter.fandom.com/fr/wiki/Wiki_Harry_Potter" target="_blank"
                   rel="noreferrer"><SiFandom/></a>
            </footer>
        </>
    )
}

export default App
