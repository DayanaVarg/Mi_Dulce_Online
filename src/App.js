import React, {Fragment} from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/auth/login';
import Register from './Pages/tienda/registroTienda';
import Productos from './Pages/productos/productos';
import AddProduct from './Pages/productos/AddProduct';
import Compra from './Pages/compra/compra';
import IndexTienda from './Pages/tienda/indexTienda'
import EditProduct from './Pages/productos/EditProduct';

// RUTAS

const cookies = new Cookies();

function App() {
  
  const Session = cookies.get('id');

  return (
  <Fragment>
    <Router>
      <Routes>
        
      {/* INDEX */}
      <Route path='/' exact element={<Productos/>}/>
      {/* LOGIN TIENDA */}
      <Route path='/login' exact element={<Login/>}/>
      {/* REGISTRAR TIENDA */}
      <Route path='/register' exact element={<Register/>}/>
      {/* AGREGAR PRODUCTO (Solo se puede con una sesión iniciada gracias a que trae el id de la tienda) */}
      <Route path='/AddProduct' exact element={Session ? <AddProduct/> : <Navigate to="/login"/>}/>
      {/* COMPRA POR PARTE DEL CLIENTE */}
      <Route path='/compra' exact element={<Compra/>}/>
      {/* APARTADO POR PARTE DE LA SESION INICIADA DE LA TIENDA */}
      <Route path='/home' exact element={Session ? <IndexTienda/> : <Navigate to="/login"/>}/>
        {/* APARTADO POR PARTE DE LA SESION INICIADA DE LA TIENDA */}
        <Route path='/EditProduct' exact element={Session ? <EditProduct/> : <Navigate to="/login"/>}/>
      
      </Routes>
    </Router>
  </Fragment>
  );
}

export default App;
