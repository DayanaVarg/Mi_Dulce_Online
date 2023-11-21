/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../../static/css/Productos/productos.css'
import { Link } from 'react-router-dom';

const Descripcion = () =>{
    return(
        <div className='container'>
            <div className='conImg'>
                    <img className='imgPro' src="../dist/img/carousel/gomitas2.png"/>
            </div>

            <div className='decs'>
                <h1>Trululu Snacks Casquitos</h1>
                <p className='texto'>Deliciosos casquitos de gomita sabor a mandarina con vitamina C. Perfectas para dulces de fiestas infantiles, ¡los niños las amaran por su delicioso sabor!. Adquiérelas en línea.</p>
                <p className='texto'>Presentación: 1 Bolsa x 90 Gramos</p>
                <ul className='carac'>
                    <li>Gramos por unidad: 90 Gramos</li>
                    <li>Precio por gramo: $ 24.4</li>  
                </ul>
                <div className='info'><h4 className="precio">$2,200</h4><p className='texto p'>c/u</p></div>
                <div  className="row">
                    <div className="col-7">
                        <p></p>
                    </div>
                        <div className="col-5">
                            <Link to={"/compra"} className="btn btn-primary btn-block">Comprar Ahora </Link>
                        </div>
                </div>
            </div>
        </div>  

    )
}

export default Descripcion;