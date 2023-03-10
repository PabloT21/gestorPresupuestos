import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({
    presupuesto,setPresupuesto,
    isValidPresupuesto, setIsValidPresupuesto,
    gastos,setGastos}
    ) =>{
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? ( //Si el presupuesto es válido
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    gastos={gastos}   
                    setGastos={setGastos}
                    setIsValidPresupuesto={setIsValidPresupuesto}                             
                ></ControlPresupuesto>
            ) : (  // Si el presupuesto no es válido
            <NuevoPresupuesto 
               presupuesto={presupuesto}
               setPresupuesto={setPresupuesto}
               setIsValidPresupuesto={setIsValidPresupuesto}
            />
    )}
        </header>
    )
}

export default Header
