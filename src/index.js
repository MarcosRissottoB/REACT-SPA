import React from 'react';
import ReactDOM from 'react-dom';
import Lienzo from './component/Lienzo';
import Platos from './component/platos/Platos';
import Bebidas from './component/bebidas/Bebidas';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

const RouterDelLienzo = (
  <BrowserRouter>
    <Route path="/" component={Lienzo} />
  </BrowserRouter>
);

ReactDOM.render(
  RouterDelLienzo,
  document.getElementById('root')
);
