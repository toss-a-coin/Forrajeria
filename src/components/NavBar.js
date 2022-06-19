import React from "react";
import logo from "../img/logo3.png";
import '../NavBar.css';

const NavBar = () => {
    return(
        <div className="navbar">
            <ul className="navbar-items"> 
                <img src={logo}/>
                <li> <a>Contacto</a> </li>
                <li> <a>Servicios</a> </li>
                <li> <a href="/productos">Produtos</a> </li>
                <li> <a href="/">Empresa</a> </li>
            </ul>
        </div>
    )
}

export default NavBar;