import react from 'react'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
    }    from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css"


import { formatearFecha } from '../helpers'

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoOtros from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro : iconoAhorro,
    comida : iconoComida,
    casa : iconoCasa,
    ocio : iconoOcio,
    salud : iconoSalud,
    suscripciones : iconoSuscripciones,
    gastos : iconoOtros
}


const Gasto = ({gasto,setGastoEditar,eliminarGasto}) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )



    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            onClick={() => eliminarGasto(gasto.id)}
            destructive={true}
            >
            
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img 
                        src={diccionarioIconos[gasto.categoria]}
                        />
                        
                        <div className='descripcion-gasto'>
                            <p className="categoria">
                                {gasto.categoria}
                            </p>
                            <p className="nombre-gasto">{gasto.nombre}</p>
                            <p className="fecha-gasto"> Agregado el: {''}
                                <span>{formatearFecha(gasto.fecha)}</span>
                            </p>
                        </div>

                    </div>
                    <p className='cantidad-gasto'>${gasto.cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto