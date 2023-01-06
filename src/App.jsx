import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'


import { generarId } from './helpers'

import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {


const [presupuesto, setPresupuesto] = useState(0);
const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)

const [gastos,setGastos] = useState([])


const handleNuevoGasto = () => {
  setModal(true)
  
  setTimeout(() => {
    setAnimarModal(true);  
  },500)
}


const guardarGasto = gasto => {
  gasto.id = generarId();
  gasto.fecha = Date.now()
  setGastos([...gastos, gasto]) // Le agrego gasto, a lo que habia en gastos

  setAnimarModal(false)

  setTimeout(()=> {
      setModal(false)
  },500)
}

  return (
    <div>
       <Header  
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
       />

      {isValidPresupuesto ? (
        <> 
          <main>
            <ListadoGastos
              gastos={gastos}
            ></ListadoGastos>
          </main>
        <div className='nuevo-gasto'>
        <img
          src={IconoNuevoGasto}
          alt="Icono nuevo gasto"
          onClick={handleNuevoGasto}
        ></img>
      </div>

      </>
      )
    : null // Si el presupuesto no es valido, no imprimo el html del boton
    }

    {modal ? (
      <Modal
        modal={modal}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />
    ) : null}
      

    </div>
  )
}

export default App
