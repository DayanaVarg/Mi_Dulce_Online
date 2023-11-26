import React, {useState} from "react";
import Cookies from 'universal-cookie';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios'
import Navbar from '../../Components/navbar';
import '../../static/css/Productos/addProducto.css';

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
            <Navbar></Navbar>
            <div className="register-box">
                <div className="register-logo">
                    <b>Registrar Producto</b>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registre un nuevo producto para su tienda</p>
                        <form  onSubmit={handleSubmit} >
                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" name="Nombre" onChange={e => setInputData({...inputData, Nombre: e.target.value})} placeholder="Nombre" required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6">
                                    <input type="number" className="form-control" name="Precio" onChange={e => setInputData({ ...inputData, Precio: e.target.value })} placeholder="Precio" required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                                <div className="input-group mb-3">
                                    <select className="form-control" name="Categoría" onChange={e => setInputData({ ...inputData, Categoría: e.target.value })} required>
                                        <option value="" disabled selected>Selecciona una categoría</option>
                                        <option value="Colombina">Colombina</option>
                                        <option value="Ramo">Ramo</option>
                                    </select>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-address-card" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="input-group mb-3 ">
                                    <textarea type="text" className="form-control" rows="4" name="Descripción" onChange={e => setInputData({...inputData, Descripción: e.target.value})} placeholder="Descripción" required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                   

                           
                            <div className="row">
                                <div className="col-7">
                                <p className="mb-2">
                                    <Link to={"/home"}> Atrás </Link>
                                </p>
                                </div>
                        {/* /.col */}
                                <div className="col-5">
                                <button type="submit" className='btn btn-secondary btn-block'>Agregar</button>
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