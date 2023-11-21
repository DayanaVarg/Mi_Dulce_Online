import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'


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
            <div className="register-box">
                <div className="register-logo">
                    
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Actualice su producto</p>
                        <form  onSubmit={handleSubmit} >
                      

                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    <input type="text" className="form-control" name="Nombre" value={data.Nombre} onChange={e => setData({...data, Nombre: e.target.value})} placeholder="Nombre" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group col-md-6 ">
                                    <input type="text" className="form-control" name="Descripción" value={data.Descripción} onChange={e => setData({...data, Descripción: e.target.value})} placeholder="Descripción" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-row mb-3">
                                <div className="input-group col-md-6">
                                    
                                    <select className="form-control" name="Categoría" value={data.Categoría} onChange={e => setData({...data, Categoría: e.target.value})}>
                                        <option value="" disabled selected>Selecciona una categoría</option>
                                        <option value="Colombina">Colombina</option>
                                        <option value="Ramo">Ramo</option>
                                    </select>
                                </div>
                                <div className="input-group col-md-6">
                                    <input type="number" className="form-control" name="Precio" value={data.Precio} onChange={e => setData({...data, Precio: e.target.value})} placeholder="Precio" />
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
                                <button type="submit" className='btn btn-info'>Actualizar</button>
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