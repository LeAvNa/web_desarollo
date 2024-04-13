import FormularioUsuario from './FormularioUsuario';
import Usuarios from './Usuarios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MostrarTablas() {
    const[boolean, setBoolean] = useState(false);

    function Click(e){
        setBoolean(e = true)
    }
    
    function MostrarUsuarios() {
        return (
            <div>
                <Button onClick={Click}>Nuevo Usuario</Button>
                <Usuarios />
            </div>
        )
    }

    function MostrarFormulario() {
        return(
            <div>
                <FormularioUsuario boolean = {true}/>
            </div>
        )
    }

    return (
        
        boolean ?
            MostrarFormulario() : MostrarUsuarios()
    )
}

export default MostrarTablas;