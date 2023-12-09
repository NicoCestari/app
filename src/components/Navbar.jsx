import "../styles.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";


const Navbar = () => {
    return (
        <nav className="navbar">
            <>
               <img src="../Logo.png" className="logo" alt="distribuidora" /> 
            </>           
            <ul className="menu">
                <li><Link className="menu-link" to="/"> Inicio </Link></li>
                <li><Link className="menu-link" to="/products/Alimento"> Alimento </Link></li>
                <li><Link className="menu-link" to="/products/Petshop"> Petshop </Link></li>
                <li><Link className="menu-link" to="/products/Acuario"> Acuario </Link></li>
                <li><Link className="menu-link" to="/contacto"> Contacto </Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
};

export default Navbar;