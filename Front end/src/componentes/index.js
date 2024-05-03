import React, { useEffect, useState } from 'react';
import FormUser from './FormularioUsuario';
import TableUser from './Usuarios';
import Formulario from './FormularioUsuario';
import TablaUsuarios from './Usuarios';
import { useDispatch } from 'react-redux';
import FormularioUsuario from './FormularioUsuario';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if(showForm){
            setUserEdit(idUserEdit);
        }
    };

    useEffect(() => {
        
    }, [dispatch, idUserEdit]);

    return (
        showForm ? (
            <FormularioUsuario showForm={showTable} id={idUserEdit}/>
        ) : (
            <TablaUsuarios showForm={showTable} idUserEdit={id => setUserEdit(id)}/>
        )
    );
}

export default Usuarios;