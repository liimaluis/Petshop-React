import React from "react";
import "../assets/css/componentes/cabecalho.css"
import { Link } from "react-router-dom";

import imagem from "../assets/img/doguito.svg"

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">
                </span>
            </div>
            <div>
                <Link to="/" className="flex flex--centro">
                    <img className="cabecalho__logo" src={imagem}
                    alt="Logo Doguito"/>
                    <h1 className="cabecalho__titulo">Petshop</h1> 
                </Link>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link to="#" className="menu-item menu-item--entrar">Entar</Link></li>
                    <li><Link to="#" className="menu-item">Produtos</Link></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-cabelho-background"></div>
        </header>
    )
}

export default Cabecalho