import React from "react";
import "../../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-2 mb-3">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#">La Biblioteca de los Gatos</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="primerboton nav-link active" aria-current="page" href="https://www.expertoanimal.com/razas-de-gatos.html">Vistazo general</a>
                            </li>
                            <li className="nav-item">
                                <a className="segundoboton nav-link" href="https://piensoymascotas.com/1171-comida-gatos">Dieta</a>
                            </li>
                            <li className="nav-item">
                                <a className="tercerboton nav-link" href="https://www.royalcanin.com/es/cats/thinking-of-getting-a-cat/how-to-care-for-a-kitten-or-cat?utm_campaign=on-rc-es-consideration-consideration-x-idcp21316077764&utm_source=googleSearch&utm_medium=brand-searchPaid-cat&utm_content=broad-x&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwwae1BhC_ARIsAK4JfrzaQ0l4YD9xpwFTe72vb6Jj68lKwPtx7m_72fOOmZnaPBCyD4PucJUaAhLAEALw_wcB">Habitos</a>
                            </li>
                            <li className="nav-item">
                                <a className="cuartoboton nav-link" href="https://www.fundacion-affinity.org/perros-gatos-y-personas/busco-un-animal-de-compania/la-adopcion-de-perros-y-gatos-perfecta-existe?gad_source=1&gclid=Cj0KCQjwwae1BhC_ARIsAK4JfryLgNTYEw448jQcpy_-TFqGUG2zvtUlvPksUZ1Wb88QFnaNXUbYXOcaAvVREALw_wcB" >Primeros Pasos</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export const Navbar2 = () => {
    return (
        <div className="bg-dark mt-5 text-light text-center py-2">
            <p className="mb-0">Hecho con mucho MiauMor ❤️ Copyright 2024</p>
        </div>
    );
};

export default Navbar;