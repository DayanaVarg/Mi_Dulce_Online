/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Carousel from '../componentes/carousel'; 
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Carousel />
                <div className="contenido" />
                <h1 className="subtitle">Otros productos</h1>
                <div className="card-columns ml-4">
                    <div className="card mb-3 ">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to={"/productos/descripcion"} className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="./dist/img/carousel/gomitas2.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to="#" className="btn btn-primary">Comprar</Link>
                    </div>
                    </div>
                </div>
            </div>

    );
};

export default Home;