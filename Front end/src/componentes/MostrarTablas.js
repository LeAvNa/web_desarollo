import Formulario from './FormularioUsuario';
import Usuarios from './Usuarios';
import { Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MostrarTablas() {
    const[boolean, setBoolean] = useState(false);
    const[ id, setId] = useState();

    function Click(e){
        setBoolean(e = true)
    }

    function Click2(){
        
        Click();

    }
    
    function MostrarUsuarios() {
        return (
            <div>
                <Row>
                    <Col>
                    <Button onClick={Click}>Nuevo Usuario</Button>
                    </Col>
                    <Col>
                    <Button onClick={Click2}>Editar usuario</Button>
                    </Col>
                    <br></br><br/>
                </Row>
                
                <Usuarios />

            </div>
        )
    }

    

    function MostrarFormulario() {
        return(
            <div>
                <Formulario boolean = {true}/>
            </div>
        )
    }

    return (
        
        boolean ?
            MostrarFormulario() : MostrarUsuarios()
    )
}

export default MostrarTablas;