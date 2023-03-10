import {useState,useEffect} from 'react'

import Mensaje from './mensaje'

import cerrarModal from '../img/cerrar.svg'

const Modal = ({
    modal
    ,setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
    }) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre,setNombre] = useState('');

    const [cantidad,setCantidad] = useState('');

    const [categoria,setCategoria] = useState('');

    const [fecha,setFecha] = useState('')

    const [id, setId] = useState('')


    useEffect(() =>{
        if(Object.keys(gastoEditar).length){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])
    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
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

        guardarGasto({nombre,cantidad,categoria,id,fecha})


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
                <legend> {gastoEditar.nombre ? "Editar gasto" : "Nuevo gasto"} </legend>

            // Con esto digo, si hay un mensaje, imprimilo, sino no
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor="nombre"> Nombre del gasto</label>

                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        placeholder='A??ade el nombre del gasto'
                        onChange={ e => setNombre(e.target.value)}
                    ></input>
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad"> Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        value={cantidad}
                        placeholder='A??ade el monto gastado'
                        onChange={ e => setCantidad(Number(e.target.value))}
                    ></input>
                </div>


                <div className='campo'>
                    <label htmlFor="categoria"> Categor??a</label>
                    
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
                    value={ gastoEditar.nombre ? "Guardar cambios" : "A??adir gasto"}
                />
            </form>

        </div>
    )
}

export default Modal