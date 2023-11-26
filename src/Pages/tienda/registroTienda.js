import React, {useState} from "react";
import '../../static/css/Tienda/tienda.css';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


function RegisterF() {
    const [inputData, setInputData] = useState({
        Nombre: '',
        Email: '',
        Región: '',
        Dirección: '',
        Telefono: '',
        Password: ''
    })

    const navigat = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:3040/Tienda', inputData)
            .then(res => {
                alert("Registro correctamente :D")
                navigat('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo">
                    <b>Registro Tienda</b>
                </div>
                <div className="cardTienda">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registro de una nueva tienda</p>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" name="Nombre" onChange={e => setInputData({...inputData, Nombre: e.target.value})} placeholder="Nombre" required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6 ">
                                    <input type="email" className="form-control" name="Email" onChange={e => setInputData({...inputData, Email: e.target.value})} placeholder="Email" required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                   
                                    <select
                                    id="region"
                                    className="form-control"
                                    name="Región"
                                    onChange={(e) => setInputData({ ...inputData, Región: e.target.value })}
                                    required>
                                    <option value="">Selecciona una región</option>
                                    <option value="Bogotá">Bogotá</option>
                                    <option value="Medellín">Medellín</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Pereira">Pereira</option>
                                    </select>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" name="Dirección" onChange={e => setInputData({...inputData, Dirección: e.target.value})} placeholder="Dirección" required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="tel" className="form-control" name="Telefono" onChange={e => setInputData({...inputData, Telefono: e.target.value})} placeholder="Telefono" pattern="[0-9]{10}" maxlength="12" 
                                        title="La información ingresada no coincide con un número de celular" required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-mobile" aria-hidden="true"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6">
                                    <input type="password" className="form-control" name="Password" onChange={e => setInputData({...inputData, Password: e.target.value})} placeholder="Contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Debe contener al menos un número, una letra mayúscula, una letra minúscula y tener al menos 8 caracteres." required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                <p className="mb-0">
                                    <Link to={"/login"} >Ya tengo una cuenta</Link>
                                </p>
                                </div>
                        {/* /.col */}
                                <div className="col-5">
                                <button className='btn btn-secondary btn-block'>Registrar</button>
                                </div>
                        {/* /.col */}
                            </div>
                        </form>
                    
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
        </div>
        );
}
export default RegisterF;