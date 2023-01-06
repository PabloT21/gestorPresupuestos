import {useState} from 'react'

import Mensaje from './mensaje'

import cerrarModal from '../img/cerrar.svg'

const Modal = ({modal,setModal,animarModal,setAnimarModal,guardarGasto}) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre,setNombre] = useState('');

    const [cantidad,setCantidad] = useState('');

    const [categoria,setCategoria] = useState('');


    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(()=> {
            setModal(false)
        },500)
    }

    const expirarMensaje= () => {
        setTimeout(() => {
            setMensaje("")
    },2000);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ([ nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son obligatorios");
            expirarMensaje();
            return;
        }
        else if(categoria <= 0){
            setMensaje("El gasto debe ser mayor a 0");
            expirarMensaje();
            return;
        }

        guardarGasto({nombre,cantidad,categoria})


    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                src={cerrarModal}
                alt="Cerrar modal"
                onClick={ocultarModal}
                />
            </div>
            
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend> Nuevo Gasto </legend>

            // Con esto digo, si hay un mensaje, imprimilo, sino no
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor="nombre"> Nombre del gasto</label>

                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        placeholder='Añade el nombre del gasto'
                        onChange={ e => setNombre(e.target.value)}
                    ></input>
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad"> Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        value={cantidad}
                        placeholder='Añade el monto gastado'
                        onChange={ e => setCantidad(Number(e.target.value))}
                    ></input>
                </div>


                <div className='campo'>
                    <label htmlFor="categoria"> Categoría</label>
                    
                    <select
                        id="categoria"
                        value={categoria}
                        onChange= {e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="gastos">Otros</option>



                    </select>

                </div>

                <input
                    type="submit"
                    value="Añadir gasto"
                />
            </form>

        </div>
    )
}

export default Modal