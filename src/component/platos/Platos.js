import React, { Component } from 'react';
import './Platos.css';
import logo from '../../logo.svg';
import VarTiendaController from '../../tiendaController';
import Ordenar from '../ordenar/Ordenar';

class Platos extends Component{
    render(){
        let platos_div = [];

        const llenar_array_platos_div = VarTiendaController.platos.forEach(
          (value, index) => (
              platos_div.push(
                <div className="list-group-item" key={index}>
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="ImagenPlatos" />
                        <h2 className="TitlePlatos">{ value.nombre }</h2>
                        <div className="DescripcionPlatos"> { value.descripcion }</div>
                        <Ordenar precio={value.precio} indice={index}
                          hacerPedido={(indice_d, evento_d) => {
                          VarTiendaController.ponerEnLaOrden(indice_d, evento_d)}} />
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
                            {platos_div}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Platos;
