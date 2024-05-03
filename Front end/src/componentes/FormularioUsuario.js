import { Button, Form, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap';
import './UsuarioFormulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUserUnique } from '../redux/actions/actionUsers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, useEffect } from 'react';
import { addUser } from '../redux/actions/actionUsers';

function FormularioUsuario({ showForm, id }) {

    const initialUserState = {
        idUsuario: '1',
        idRol: '0', // Se inicializa como string para que coincida con el valor de las opciones
        nombre: 'Fabian',
        primerApellido: 'Paredes',
        segundoApellido: 'Soto',
        nombreUsuario: 'Antonimo',
        fechaNacimiento: new Date(), // Puedes inicializar la fecha a la actual o alguna otra
        contrasena: '123'
        
    };
    // const [id , setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const dispatch = useDispatch();
    const [user, setUser] = useState(initialUserState);

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload);
                });
        } else {
            setUser(initialUserState);
        }
    }, [dispatch, id, initialUserState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setUser(prevState => ({
            ...prevState,
            fechaNacimiento: date
        }));
    };

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = () => {
        // Aquí deberías realizar las acciones necesarias para guardar el usuario
        addUser(user);
        console.log(id);
        console.log(user);
    };



    function Click() {
        showForm();
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
                        <Col lg={6} sm={12} XL={6} className="columna">
                            <FormLabel>ID: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control
                                type="text"
                                name="idUsuario"
                                id="idUsuario"
                                value={user.idUsuario}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Nombre : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={user.nombre}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Primer Apellido : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="primerApellido"
                                value={user.primerApellido}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Segundo Apellido : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="segundoApellido"
                                value={user.segundoApellido}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Fecha de Nacimiento: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <DatePicker
                                className='form-control'
                                selected={user.fechaNacimiento}
                                onChange={handleDateChange}
                            />
                        </Col>
                    </Row>
                    
                    <br />

                    

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Rol: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select name="idRol" value={user.idRol} onChange={handleChange}>
                                <option value={"0"} disabled>Seleccione un Rol</option>
                                <option value={"1"}>Administrador</option>
                                <option value={"2"}>Usuario</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Nombre de Usuario : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="nombreUsuario"
                                value={user.nombreUsuario}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Contraseña : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="password"
                                name="contrasena"
                                value={user.contrasena}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Confirmar Contraseña : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="password"
                                name="confirmarContrasena"
                                value={user.confirmarContrasena}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                </CardBody>

                <CardFooter>
                    <Row>
                        <Col>
                            <Button variant='primary' onClick={handleGuardar}>Guardar</Button>
                        </Col>
                        <Col>
                            <Button variant='danger' onClick={handleCancel} className='m-1'>Cancelar</Button>
                        </Col>
                    </Row>

                </CardFooter>
            </Card>
        </Form>

    )

}

export default FormularioUsuario;
