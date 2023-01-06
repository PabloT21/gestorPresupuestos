import React from 'react'
import { useState } from 'react';
import Mensaje from './mensaje';

const NuevoPresupuesto =  ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) =>{

    const [mensaje,setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault();

        // Valído que pueda convertirse a numero y sea positivo
        if (!presupuesto || Number(presupuesto) < 0){
            setMensaje("No es un presupuesto válido");

            return
        }
        setMensaje("")
        setIsValidPresupuesto(true)

        console.log("Enviando formulario");
    }
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className='formulario' onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>Definir presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type="number"
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange= { e => setPresupuesto(Number(e.target.value))}
                />  
            </div>
            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>
        </div>
    )
}

export default NuevoPresupuesto
