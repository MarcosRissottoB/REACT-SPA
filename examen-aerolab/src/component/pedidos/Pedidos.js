import React, { Component } from 'react';
import VarTiendaController from '../../tiendaController';
import { Observer } from 'mobx-react';

class Pedidos extends Component{
    render(){
        let PlatosPedidos = [];

        let BebidasPedidas = [];

        const llenar_platos_pedidos = VarTiendaController.platos.forEach(
          (value, index) =>{
              if(value.cantidad != 0){
                PlatosPedidos.push(
                  <div className="list-group-item" key={index}>
                      <div className="panel-body">
                        <h4> { value.nombre }</h4><br/>
                        <div className="APrecioCantidad">
                            <span>Cantidad: {value.cantidad}</span>
                            <span className="PrecioPlatos">Precio total: { value.cantidad*value.precio }</span>
                        </div>
                      </div>
                  </div>
                )
              }
        })

        const llenar_bebidas_pedidos = VarTiendaController.bebidas.forEach(
          (value, index) =>{
              if(value.cantidad != 0){
                BebidasPedidas.push(
                  <div className="list-group-item" key={index}>
                      <div className="panel-body">
                        <h4> { value.nombre }</h4><br/>
                        <div className="APrecioCantidad">
                            <span>Cantidad: {value.cantidad}</span>
                            <span className="PrecioPlatos">Precio total: { value.cantidad*value.precio }</span>
                        </div>
                      </div>
                  </div>
                )
              }
        })


        return(
            <div className="container col-md-6">
              <div>
                <div className="panel panel-primary">
                  <div className="list-group Pedidos-menu">
                      {PlatosPedidos}
                      {BebidasPedidas}
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Pedidos;
