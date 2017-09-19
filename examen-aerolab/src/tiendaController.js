import { extendObservable } from 'mobx';

class TiendaController {
    constructor(){
        extendObservable(this,
            {
              platos: [
                {
                 nombre: "primerPlato",
                 descripcion: "platillo mas que rico",
                 precio: 120,
                 cantidad: 0
                },
                {
                 nombre: "segundoPlato",
                 descripcion: "platillo muy rico",
                 precio: 110,
                 cantidad: 0
                },
                {
                 nombre: "tercerPlato",
                 descripcion: "platillo demasiado rico",
                 precio: 105,
                 cantidad: 0
                }],
             bebidas: [
                {
                 nombre: "primerBebida",
                 descripcion: "bebida mas que rica",
                 precio: 40,
                 cantidad: 0
                },
                {
                 nombre: "segundaBebida",
                 descripcion: "bebida muy rica",
                 precio: 30,
                 cantidad: 0
                },
                {
                 nombre: "tercerBebida",
                 descripcion: "bebida sana",
                 precio: 35,
                 cantidad: 0
                }]
            });
    }

    ponerEnLaOrden(indiceDelPlato, cantidadDePlatos){
        this.platos.forEach((value, index) => {
            if(indiceDelPlato === index){
                this.platos[index].cantidad = cantidadDePlatos;
            }
        })
    }

    bebidasEnLaOrden(indiceDeLaBebida, cantidadDeBebidas){
        this.bebidas.forEach((value, index) => {
            if(indiceDeLaBebida === index){
                this.bebidas[index].cantidad = cantidadDeBebidas;
            }
        })
    }

}

var VarTiendaController = new TiendaController;

export default VarTiendaController;
