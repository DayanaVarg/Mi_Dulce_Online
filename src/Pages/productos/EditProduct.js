import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import '../../static/css/Productos/addProducto.css';
import Navbar from '../../Components/navbar';


const cookies = new Cookies();



function EditProduct(props) {

const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedProductId = queryParams.get("productId");

    const id = selectedProductId;
    const [data, setData] = useState([])
    const navigate = useNavigate()  
    useEffect(() => {

        axios.get('http://localhost:3040/Productos/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(event) {

        event.preventDefault()
        axios.put('http://localhost:3040/Productos/' + id, data)
            .then(res => {

                alert("Producto actualizado correctamente :D")
                navigate('/home')
            })

    }

    return (
        <div className="register-page">
            <Navbar></Navbar>
            <div className="register-box">
                <div className="register-logo">
                    <b>Actualizar Producto</b>
                </div>
                <div className="card cardTi">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Actualice su producto</p>
                        <form  onSubmit={handleSubmit} >
                      
                            
                            <div className="form-row mb-3">
                                <div className='ml-1 mr-3'>
                                <label>Nombre</label>
                                    <div className="input-group ">
                                        <input type="text" className="form-control" name="Nombre" value={data.Nombre} onChange={e => setData({...data, Nombre: e.target.value})} placeholder="Nombre" required />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                </div>
                                </div>

                                <div className='ml-4'>
                                <label>Precio</label>
                                    <div className="input-group ">
                                        <input type="number" className="form-control" name="Precio" value={data.Precio} onChange={e => setData({...data, Precio: e.target.value})} placeholder="Precio" required />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-address-card" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>


                                <div>
                                <label>Categoría</label>
                                    <div className="input-group mb-3">
                                        <select className="form-control" name="Categoría" value={data.Categoría} onChange={e => setData({...data, Categoría: e.target.value})} required>
                                            <option value="" disabled selected>Selecciona una categoría</option>
                                            <option value="Colombina">Colombina</option>
                                            <option value="Ramo">Ramo</option>
                                        </select>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                <label>Descripción</label>
                                    <div className="input-group mb-3">
                                        <textarea type="text"  className="form-control" rows="4" name="Descripción" value={data.Descripción} onChange={e => setData({...data, Descripción: e.target.value})} placeholder="Descripción" required />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
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
                                <button type="submit" className='btn btn-secondary btn-block'>Actualizar</button>
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
export default EditProduct;