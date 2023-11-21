import React, {useState} from "react";
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const cookies = new Cookies();

function AddProduct() {
    const [inputData, setInputData] = useState({
        Nombre: '',
        Descripción: '',
        Categoría: '',
        Precio: '',
        id_tienda: ''
    })

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const tiendaId = cookies.get('id');
            inputData.id_tienda = tiendaId;


            await axios.post('http://localhost:3040/Productos', inputData);
            alert('Nuevo producto para su tienda');
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo">
                    
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registre un nuevo producto para su tienda</p>
                        <form  onSubmit={handleSubmit} >
                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" name="Nombre" onChange={e => setInputData({...inputData, Nombre: e.target.value})} placeholder="Nombre" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6 ">
                                    <input type="text" className="form-control" name="Descripción" onChange={e => setInputData({...inputData, Descripción: e.target.value})} placeholder="Descripción" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    
                                    <select className="form-control" name="Categoría" onChange={e => setInputData({ ...inputData, Categoría: e.target.value })}>
                                        <option value="" disabled selected>Selecciona una categoría</option>
                                        <option value="Colombina">Colombina</option>
                                        <option value="Ramo">Ramo</option>
                                    </select>
                                </div>
                                <div className="input-group col-md-6">
                                    <input type="number" className="form-control" name="Precio" onChange={e => setInputData({ ...inputData, Precio: e.target.value })} placeholder="Precio" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="row">
                                <div className="col-7">
                                    
                                </div>
                        {/* /.col */}
                                <div className="col-5">
                                <button type="submit" className='btn btn-info'>Agregar</button>
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
export default AddProduct;