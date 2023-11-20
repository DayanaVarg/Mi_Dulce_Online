import React from 'react';
import './css/tiendaIndex.css'
import { Link } from 'react-router-dom';
import Navbar from '../../componentes/navbar';

const RegistrarPro = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}><b>Registro Tienda</b></Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registro de una nueva tienda</p>
                        <form action="../../index.html" method="post">
                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Nombre" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6 ">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Región" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Dirección" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="number" className="form-control" placeholder="Telefono" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-mobile" aria-hidden="true"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6">
                                    <input type="password" className="form-control" placeholder="Contraseña" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <Link to={"/login"} className="text-center">Ya tengo una cuenta</Link>
                                </div>
                        {/* /.col */}
                                <div className="col-5">
                                    <Link to={"/home"} className="btn btn-secondary btn-block">Registrar</Link>
                                </div>
                        {/* /.col */}
                            </div>
                        </form>
                    
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
        </div>
    )
}

export default RegistrarPro;