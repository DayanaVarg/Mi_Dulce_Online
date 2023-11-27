import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../static/css/Productos/productos.css';
import { Link, useNavigate} from 'react-router-dom';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [tiendas, setTiendas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [regionSeleccionada, setRegionSeleccionada] = useState('');
  const [rangoPrecioSeleccionado, setRangoPrecioSeleccionado] = useState('');

  const navigate = useNavigate();

  useEffect(() => {

    axios.get('http://localhost:3040/Productos')
      .then(res => {
        const data = res.data;
        setProductos(data);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3040/Tienda')
      .then(res => {
        const data = res.data;
        setTiendas(data);
      })
      .catch(err => console.log(err));
  }, []);


  const getNombreTienda = (idTienda) => {
    const tienda = tiendas.find(t => t.id === idTienda);
    return tienda ? tienda.Nombre : 'Tienda no encontrada';
  };

  

  const getRegionTienda = (idTienda) => {
    const tienda = tiendas.find(t => t.id === idTienda);
    return tienda ? tienda.Región : 'Región no encontrada';
  };

  const filtrarPorRegion = (producto) => {
    if (regionSeleccionada === '') {
      return true;
    } else {
      return getRegionTienda(producto.id_tienda) === regionSeleccionada;
    }
  };
  

const filtrarPorCategoria = (producto) => {
    if (categoriaSeleccionada === '') {
      return true;
    } else {
      return producto.Categoría === categoriaSeleccionada;
    }
  };

  
  
  const filtrarPorPrecio = (producto) => {
    if (rangoPrecioSeleccionado === '') {
      return true;
    } else {
      const [precioMinimo, precioMaximo] = rangoPrecioSeleccionado.split('-');
      return parseInt(producto.Precio) >= parseInt(precioMinimo) && parseInt(producto.Precio) <= parseInt(precioMaximo);
    }
  };


  return (
    <div>
      <h1 className="title">Nuestros productos</h1>
      <div className="form-group text-center">
        <label htmlFor="filtroTienda">Filtrar por categoría:</label>
        <select onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="Colombina">Colombina</option>
          <option value="Ramo">Ramo</option>
          <option value="Dulces">Dulces</option>
          <option value="Otras">Otras</option>
        </select>

        <label htmlFor="filtroRegión">Filtrar por región:</label>
      <select onChange={(e) => setRegionSeleccionada(e.target.value)}>
        <option value="">Todas las regiones</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Chapinero">Chapinero</option>
        <option value="Usme">Usme</option>
        <option value="Pereira">Pereira</option>
        <option value="Medellín">Medellín</option>
        <option value="Cali">Cali</option>
       
      </select>
        
        <label htmlFor="filtroTienda">Filtrar por precio:</label>
        <select onChange={(e) => setRangoPrecioSeleccionado(e.target.value)}>
          <option value="">Todos los precios</option>
          <option value="0-1000">$0 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value="2000-3000">$2000 - $3000</option>
          <option value="3000-4000">$3000 - $4000</option>
          <option value="4000-5000">$4000 - $5000</option>
        </select>
      
      </div>

      <div className="card-columns ">
      {productos.filter(filtrarPorCategoria).filter(filtrarPorPrecio).filter(filtrarPorRegion).map((producto, index) => (
          <div className='' key={index}>
            
             <div className="card cardp mb-3" >
            
             <img class="card-img-top" src={`${producto.imagenUrl}`} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">{producto.Nombre}</h5>
                      <p className="card-text desc">{producto.Descripción}</p>
                      <p className="card-text titl">Categoría: <small> {producto.Categoría}</small></p>
                      <p className="card-text titl">Tienda: <small>{getNombreTienda(producto.id_tienda)}</small></p>
                      <p className="card-text region">{getRegionTienda(producto.id_tienda)}</p>
                      <p className="card-text precio1">${producto.Precio}<small>c/u</small></p>
                      <button
                        className="btn btn-primary btn-c"
                        onClick={() => {
                        const queryParams = `?productId=${producto.id}`;
                        navigate(`/compra${queryParams}`);
                          }}
                            >  
                      Comprar
                      </button>
                    </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
