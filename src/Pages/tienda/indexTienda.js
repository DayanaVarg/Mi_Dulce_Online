import React, { useEffect, useState } from "react";
import '../../static/css/Tienda/tiendaIndex.css';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../Components/navbar';
import Cookies from 'universal-cookie';
import axios from "axios";


const cookies = new Cookies();

const IndexTienda = () => {
    const [records, setRecords] = useState([]);
    const [tiendas, setTiendas] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [rangoPrecioSeleccionado, setRangoPrecioSeleccionado] = useState('');
  
    const navigate = useNavigate();

    const cerrarSesion = () => {
      cookies.remove('id', { path: "/" });
      cookies.remove('Nombre', { path: "/" });
      navigate("/");
    };
  
    useEffect(() => {
      const tiendaId = cookies.get('id');
  
      if (!tiendaId) {
        navigate("/login");
      } else {
        axios.get(`http://localhost:3040/Productos?id_tienda=${tiendaId}`)
          .then((res) => {
            const data = res.data;
            setRecords(data);
          })
          .catch((err) => console.log(err));
      }
    }, [navigate]);
  
    const handleDelete = (id) => {
      const conf = window.confirm("¿Estás seguro de eliminarlo?");
      if (conf) {
        axios.delete(`http://localhost:3040/Productos/${id}`)
          .then(() => {
            alert("Producto eliminado");
            window.location.reload();
          })
          .catch(err => console.log(err));
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
        <Navbar />
        <h1 className="title">Tus productos</h1>
        <Link to="/AddProduct"><button className="btn btn-primary btnA">Añadir</button></Link>
        <div className="form-group text-center">
          <label htmlFor="filtroTienda">Filtrar por categoría:</label>
          <select onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
            <option value="">Todas las categorías</option>
            <option value="Colombina">Colombina</option>
            <option value="Ramo">Ramo</option>
            <option value="Otras">Otras</option>
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
        <br></br>
        <div className="card-columns colms">
          {records.filter(filtrarPorCategoria).filter(filtrarPorPrecio).map((record, index) => (
                    <div key={index}>
                        <div className="card cardT mb-4">
                            
                  <img class="card-img-top" src={`${record.imagenUrl}`} alt="Card image cap" />

                            <div className="card-body">
                                <h2 className="card-title">{record.Nombre}</h2>
                                <p className="card-text desc">{record.Descripción}</p>
                              
                                <p className="card-text titl">Categoría: <small>{record.Categoría}</small></p>
                                <p className="card-text precio1">${record.Precio}<small>c/u</small></p>
  
                                <button
                                    className="btn btnEli  col-5"
                                    onClick={() => handleDelete(record.id)}
                                >
                                    Eliminar
                                </button>

                                <button
                                className="btn btn-primary btnAct btn-block col-5"
                                onClick={() => {
                                const queryParams = `?productId=${record.id}`;
                                navigate(`/EditProduct${queryParams}`);
                                  }}
                                    >  
                              Actualizar
                                  </button>

                                
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndexTienda;
