import React, { Component } from 'react';
import Platos from './platos/Platos';
import Pedidos from './pedidos/Pedidos';
import Bebidas from './bebidas/Bebidas';
import { BrowserRouter as Router, Route, Link, hashHistory } from 'react-router-dom';

class Lienzo extends Component{

    render(){

        return(
            <div className="container">
              <div className="jumbotron">
                <h2>Nombre de la tienda</h2>
              </div>

                <div>
                  <div>
                    <Link to="/platos">Platos</Link>
                    <Link to="/bebidas">Bebidas</Link>
                  </div>
                  <div>
                    <Route path="/platos" component={Platos}/>
                    <Route path="/bebidas" component={Bebidas}/>
                  </div>
                </div>
            
              <Pedidos />
            </div>
        )
    }
}

export default Lienzo;
