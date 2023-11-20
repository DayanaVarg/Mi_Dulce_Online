import React from 'react';
import './css/tiendaIndex.css'
import { Link } from 'react-router-dom';
import Navbar from '../../componentes/navbar';

const IndexTienda = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <h1 className="title">Tus productos</h1>
        
            
            <div className="form-group text-center">
                    <label htmlFor="filtroTienda">Filtrar por categoria:</label>
                    <select>
                        <option value="">Todas las categorias</option>
                    </select>
                    <label htmlFor="filtroTienda">Filtrar por precio:</label>
                    <select>
                        <option value="">Todos los precios</option>
                    </select>
                </div>
            <Link to="/productos/descripcion"><button className="btn btn-primary btnA ">Añadir</button></Link>
            <div className="card-columns colm ml-4">
                <div className="card mb-3 ">
                    <img className="card-img-top img2" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <Link to="/productos/descripcion" className="btn btn-primary btnEli">Eliminar</Link>
                            <Link to="/productos/descripcion" className="btn btn-primary btnAct">Actualizar</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexTienda