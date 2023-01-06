import react from 'react'
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


const Gasto = ({gasto}) => {
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <img >
                  src={diccionarioIconos[gasto.categoria]}
                </img>
                
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
    )
}

export default Gasto