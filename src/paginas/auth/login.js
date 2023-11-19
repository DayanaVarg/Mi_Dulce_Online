/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (

    <div className="register-page">
        <div className="login-box">
             
            {/* /.login-logo */}
            <div className="login-logo">
                    <Link to={"#"}><b>Iniciar Sesión</b></Link>
            </div>
            
            <div className="card">
                <div className="card-body login-card-body">
                
                    <p className="login-box-msg">¡Bienvenido! Inicia sesión para empezar</p>
                    
                    <form action="#" >
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Usuario" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <p className="mb-0">
                                    <Link to={"/register"} >Registro Tienda</Link>
                                </p>
                            </div>
                        {/* /.col */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-secondary btn-block">Iniciar</button>
                            </div>
                        {/* /.col */}
                        </div>
                    </form>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>
        </div>


    );
}

export default Login;