import React, { useEffect, useState } from 'react';
import TablaUsuarios from './Usuarios';
import { useDispatch } from 'react-redux';
import FormularioUsuario from './FormularioUsuario';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [id, setUserEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if(showForm){
            console.log(id)
            setUserEdit(id);
        }
    };

    useEffect(() => {
        
    }, [dispatch, id]);

    return (
        showForm ? (
            <FormularioUsuario showForm={showTable} id={id}/>
        ) : (
            <TablaUsuarios showForm={showTable} idUserEdit={id => setUserEdit(id)}/>
        )
    );
}

export default Usuarios;