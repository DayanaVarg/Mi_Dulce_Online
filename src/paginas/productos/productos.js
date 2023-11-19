/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./css/productos.css";
import { Link } from "react-router-dom";

const Productos = () => {
    return(
        <div>
        <h1 class="title">Nuestros productos</h1>
            <div className="form-group text-center">
                    <label htmlFor="filtroTienda">Filtrar por categoria:</label>
                    <select>
                        <option value="">Todas las categorias</option>
                    </select>
                    <label htmlFor="filtroTienda">Filtrar por región:</label>
                    <select>
                        <option value="">Todas las regiones</option>
                    </select>
                    <label htmlFor="filtroTienda">Filtrar por precio:</label>
                    <select>
                        <option value="">Todos los precios</option>
                    </select>
                </div>
         
            <div class="card-columns ml-4">
                <div class="card mb-3 ">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="/productos/descripcion" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card mb-3">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card mb-3">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card mb-3">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card mb-3">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <Link to="#" class="btn btn-primary">Comprar</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productos
