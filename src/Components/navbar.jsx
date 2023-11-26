/* eslint-disable jsx-a11y/alt-text */
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from "axios";


const cookies = new Cookies();

const Navbar = () => {
    
    const navigate = useNavigate();

    const cerrarSesion = () => {
      cookies.remove('id', { path: "/" });
      cookies.remove('Nombre', { path: "/" });
      navigate("/");
    };
  
    return(
        <div className="nav" id="navbar">
            <img className="logonav__logo" src="./dist/img/MiDulceriaOnline-removebg-preview.png" />
            <nav className="nav__container">
                <div>
                <div className="nav__list">
                    <div className="nav__items">
                        <Link to={"/home"} className="nav__link active">
                            <i className="bx bx-home nav__icon" />
                            <span className="nav__name">Inicio</span>
                        </Link>
                    </div>

                    <div className="nav__items">
                        <h3 className="nav__subtitle">Menu</h3>
                        <div class="nav__dropdown">
                            <Link to={"/pedidos"} class="nav__link">
                                <i class="bx bx-user nav__icon"></i>
                                <span class="nav__name">Pedidos</span>
                            </Link>
                        </div>
                        <Link to={"/"} class="nav__link">
                            <button class="btnSalir" type="button" onClick={cerrarSesion}>
                            <i class="bx bx-exit nav__icon"></i>
                            <span class="nav__name">Salir</span>
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
            </nav>
            </div>

    )
}

export default Navbar;