import React, { useEffect, useState } from "react";
import '../../static/css/Tienda/pedidos.css';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../Components/navbar';
import Cookies from 'universal-cookie';
import axios from "axios";


const cookies = new Cookies();

const Pedidos = () => {
    const [productos, setProductos] = useState([]);
    const [venta, setVentas] = useState([]);

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [regionSeleccionada, setRegionSeleccionada] = useState('');

  
    const navigate = useNavigate();
  
    useEffect(() => {
  
      axios.get('http://localhost:3040/Productos')
        .then(res => {
          const data = res.data;
          setProductos(data);
        })
        .catch(err => console.log(err));
  


        axios.get('http://localhost:3040/Venta')
        .then(res => {
          const data = res.data;
          setVentas(data);
        })
        .catch(err => console.log(err));
    }, []);
  
  
    const getNombreProducto= (idProducto) => {
      const producto = productos.find(t => t.id === idProducto);
      return producto ? producto.Nombre : 'Producto no encontrada';
    };

    const getPrecioProducto= (idProducto) => {
      const producto = productos.find(t => t.id === idProducto);
      return producto ? producto.Precio : 'Producto no encontrada';
    };

    const getDescProducto= (idProducto) => {
      const producto = productos.find(t => t.id === idProducto);
      return producto ? producto.Descripción : 'Producto no encontrada';
    };

    const getCateProducto= (idProducto) => {
      const productoC = productos.find(t => t.id === idProducto);
      return productoC ? productoC.Categoría : 'Producto no encontrada';
    };
  

  
    const filtrarPorRegion = (venta) => {
      if (regionSeleccionada === '') {
        return true;
      } else {
        return venta.Región === regionSeleccionada;
      }
    };
    
  
  const filtrarPorCategoria = (productoC) => {
      if (categoriaSeleccionada === '') {
        return true;
      } else {
        return productoC.Categoría === categoriaSeleccionada;
      }
    };
  
    const handleDelete = (id) => {
      const conf = window.confirm("¿Estás seguro de eliminarlo?");
      if (conf) {
        axios.delete(`http://localhost:3040/Venta/${id}`)
          .then(() => {
            alert("Pedido eliminado");
            window.location.reload();
          })
          .catch(err => console.log(err));
      }
    };
  
  
    return (
      <div>
        <Navbar></Navbar>
        <h1 className="title">Pedidos</h1>
        <div className="form-group text-center">
          <label htmlFor="filtroTienda">Filtrar por categoría:</label>
          <select onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
            <option value="">Todas las categorías</option>
            <option value="Colombina">Colombina</option>
            <option value="Ramo">Ramo</option>
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
        
        
        </div>
  
        <div className="card-columns ">
        {venta.filter(filtrarPorCategoria).filter(filtrarPorRegion).map((venta, index) => (
            <div className='' key={index}>
              <div className="card card1 mb-4">
                <br></br>
                <div className="card-body">
                  <h2 className="card-title">{getNombreProducto(venta.id_producto)}</h2>
                  <p className="card-text desc">{getDescProducto(venta.id_producto)}</p>
                  <p className="card-text titl">Categoría: <small> {getCateProducto(venta.id_producto)}</small></p>
                  <p className="card-text titl">Cliente: <small>{venta.Nombre} {venta.Apellido}</small></p>
                  <p className="card-text titl">Dirección: <small>{venta.Dirección}</small></p>
                  <p className="card-text titl">Región:<small>{venta.Región}</small></p>
                  <p className="card-text precio1">${getPrecioProducto(venta.id_producto)}<small>c/u</small></p>
                
                  <button
                    className="btn btnEli btn-c"
                    onClick={() => handleDelete(venta.id)}
                        >  
                  Eliminar
                      </button>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Pedidos;
