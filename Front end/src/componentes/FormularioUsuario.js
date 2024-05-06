import { Button, Form, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap';
import './UsuarioFormulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUserUnique } from '../redux/actions/actionUsers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { addUser, editUSer } from '../redux/actions/actionUsers';
import { useTransition } from 'react';

function FormularioUsuario({ showForm, id }) {

    const initialUserState = {
        IDUsuario: 0,
        Nombre: '',
        PrimerApellido: '',
        SegundoApellido: '',
        Genero: null,
        Correo: '',
        FechaNacimiento: '',
        Telefono: '',
        IDRol: 0,
        NombreUsuario: '',
        Contraseña: '',
        ConfirmarContraseña: '',
        Habilitado: true
    };

    const dispatch = useDispatch();
    const [user, setUser] = useState({initialUserState});

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = () => {
        if(user.Contraseña === user.ConfirmarContraseña){
            dispatch(addUser(user)).then(() => {
                console.log('Usuario guardado');
            });
        }
    };

    const handleEditar = () => {
        if(id > 0){
            if(user.Contraseña === user.ConfirmarContraseña){
                dispatch(editUSer(id, user)).then(() => {
                    console.log('Usuario editado');
                });
            }
        }else{
            alert('No se puede editar usuario');
        }
        
    };

    function Click(){
        console.log(id)
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
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>ID : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="int"
                                name="idUsuario"
                                value={user.IDUsuario}
                                onChange={(e) => setUser({ ...user, IDUsuario: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Nombre : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="string"
                                name="nombre"
                                value={user.Nombre}
                                onChange={(e) => setUser({ ...user, Nombre: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Primer Apellido : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="string"
                                name="primerApellido"
                                value={user.PrimerApellido}
                                onChange={(e) => setUser({ ...user, PrimerApellido: e.target.value })}
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
                                type="string"
                                name="segundoApellido"
                                value={user.SegundoApellido}
                                onChange={(e) => setUser({ ...user, SegundoApellido: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Genero: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select
                                name="genero"
                                value={user.Genero}
                                onChange={(e) => setUser({ ...user, Genero: e.target.value == 1 ? true : false })}>
                                <option value={""} disabled>Seleccione un Genero</option>
                                <option value={1}>Masculino</option>
                                <option value={2}>Femenino</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Fecha de Nacimiento: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <DatePicker
                                name='fechaNacimiento'
                                className='form-control'
                                selected={user.FechaNacimiento}
                                onChange={(date) => setUser({ ...user, FechaNacimiento: date })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Correo: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type='string'
                                name="correo"
                                value={user.Correo}
                                onChange={(e) => setUser({ ...user, Correo: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Telefono: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type='string'
                                name="telefono"
                                value={user.Telefono}
                                onChange={(e) => setUser({ ...user, Telefono: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Rol: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select
                                name="idRol"
                                value={user.IDRol}
                                onChange={(e) => setUser({ ...user, IDRol: parseInt(e.target.value) })}>
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
                                type="string"
                                name="nombreUsuario"
                                value={user.NombreUsuario}
                                onChange={(e) => setUser({ ...user, NombreUsuario: e.target.value })}
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
                                value={user.Contraseña}
                                onChange={(e) => setUser({ ...user, Contraseña: e.target.value })}
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
                                value={user.ConfirmarContraseña}
                                onChange={(e) => setUser({ ...user, ConfirmarContraseña: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Habilitado : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select
                                name="habilitado"
                                value={user.Habilitado}
                                onChange={(e) => setUser({ ...user, Habilitado: e.target.value == 1 ? true : false })}>
                                <option value={""} disabled>Seleccione un si</option>
                                <option value={1}>True</option>
                                <option value={2}>False</option>
                            </Form.Select>
                        </Col>
                    </Row>

                </CardBody>

                <CardFooter>
                    <Row>
                        <Col>
                            <Button variant='primary' onClick={handleGuardar}>Guardar</Button>
                        </Col>
                        <Col>
                            <Button variant='danger' onClick={handleCancel} className='m-1'>Cancelar</Button>
                        </Col>
                        <Col>
                            <Button variant='primary' onClick={handleEditar}>Editar Usuario</Button>
                        </Col>
                    </Row>

                </CardFooter>
            </Card>
        </Form>

    )

}

export default FormularioUsuario;
