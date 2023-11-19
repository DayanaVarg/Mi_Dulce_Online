import React from 'react';

import { Link } from 'react-router-dom';

const Compra = () =>{
    return(
                <div className="register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <Link to={"#"}><b>Realizar Compra</b></Link>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Ingresa tus datos</p>
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
                                        <input type="number" className="form-control" placeholder="Telefono" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-mobile" aria-hidden="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="input-group mb-3 ">
                                        <input type="text" className="form-control" placeholder="Dirección de entrega" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-address-card" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                <div className="row">
                                    <div className="col-7">
                                        <Link to={"/"} className="text-center">Atrás</Link>
                                    </div>
                            {/* /.col */}
                                    <div className="col-5">
                                        <button type="submit" className="btn btn-secondary btn-block">Comprar</button>
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

export default Compra