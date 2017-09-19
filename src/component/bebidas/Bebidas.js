import React, { Component } from 'react';
import '../platos/Platos.css';
import logo from '../../logo.svg';
import VarTiendaController from '../../tiendaController';
import Ordenar from '../ordenar/Ordenar';

class Bebidas extends Component{
    render(){
        let bebidas_div = [];

        const llenar_array_bebidas_div = VarTiendaController.bebidas.forEach(
          (value, index) => (
              bebidas_div.push(
                <div className="list-group-item" key={index}>
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="ImagenPlatos" />
                        <h2 className="TitlePlatos">{ value.nombre }</h2>
                        <div className="DescripcionPlatos"> { value.descripcion }</div>
                        <Ordenar precio={value.precio} indice={index}
                          hacerPedido={(indice_d, evento_d) => {
                          VarTiendaController.bebidasEnLaOrden(indice_d, evento_d)}} />
                    </div>
                </div>
              )
          )
        );

        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="lsit-group Platos-menu">
                            {bebidas_div}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bebidas;
