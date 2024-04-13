import { Button, Form, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap';
import './UsuarioFormulario.css';
import MostrarTablas from './MostrarTablas';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormularioUsuario() {

    function Click(){
        <MostrarTablas boolean = {false} />
        window.location.href = window.location.href;
    }

    return (
        <Form>
            <Card className="tabla">
                <CardFooter>
                    <Col>
                        <FormLabel size="lg" className="registro">Registro de Usuario</FormLabel>
                    </Col>
                </CardFooter>

                <CardBody>
                    <Row>
                        <Col lg={6} sm={12} XL={6} classname="columna">
                            <FormLabel>Nombre: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Primer Apellido: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Segundo Apellido: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Nombre de Usuario: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Contraseña: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Confirmar Contraseña: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                </CardBody>

                <CardFooter>
                    <Row>
                        <Col>
                            <Button variant="primary">Guardar</Button>
                        </Col>
                        <Col>
                            <Button onClick={Click}>Cancelar</Button>
                        </Col>
                    </Row>

                </CardFooter>
            </Card>
        </Form>

    )

}

export default FormularioUsuario;
