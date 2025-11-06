import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
    return <nav>
        <NavLink  activeClassName="aqui-estoy"  to="/" exact>Inicio</NavLink>
        <NavLink     activeClassName="aqui-estoy"  to="/blog">Blog</NavLink>
        <NavLink  activeClassName="aqui-estoy"  to="/contacto.html">Contacto</NavLink>
        <NavLink  activeClassName="aqui-estoy"  to="/personaje/Goku">Goku</NavLink>
    </nav>
}