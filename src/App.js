import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './paginas/home';

import Login from './paginas/auth/login';
import Register from './paginas/tienda/registroTienda';

import Productos from './paginas/productos/productos';
import Trululu from './paginas/productos/trululu/trululu';
import SuperCoco from './paginas/productos/superCoco/superCoco';
import Ramo from './paginas/productos/ramo/ramo';
import PingPong from './paginas/productos/pingPong/pingPong';
import BonBum from './paginas/productos/bonBum/bonBum';
import Barrilete from './paginas/productos/barrilete/barrilete';
import Descripcion from './paginas/productos/productoDesc';

import Compra from './paginas/compra/compra';

import IndexTienda from './paginas/tienda/indexTienda'

function App() {
  return (
  <Fragment>
    <Router>
      <Routes>
      <Route path='/' exact element={<Index/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/productos' exact element={<Productos/>} />
        <Route path='/productos/trululu' exact element={<Trululu/>} />
        <Route path='/productos/superCoco' exact element={<SuperCoco/>} />
        <Route path='/productos/ramo' exact element={<Ramo/>} />
        <Route path='/productos/pingPong' exact element={<PingPong/>} />
        <Route path='/productos/bomBum' exact element={<BonBum/>} />
        <Route path='/productos/barrilete' exact element={<Barrilete/>} />
        <Route path='/productos/descripcion' exact element={<Descripcion/>} />
        <Route path='/compra' exact element={<Compra/>} />
        <Route path='/home' exact element={<IndexTienda/>} />
      </Routes>
    </Router>
  </Fragment>
  );
}

export default App;
