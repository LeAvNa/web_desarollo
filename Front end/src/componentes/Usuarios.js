import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getUsers } from '../redux/actions/actionUsers';

export default function Usuarios() {

  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.getUsers);
  const { users } = useSelector((state) => state.getUsers);
  

  useEffect(()=> {
    dispatch(getUsers());
    console.log(users);
  }, [dispatch]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: 'idUsuario', headerName: 'ID' },
    { field: 'nombre', headerName: 'Nombre' },
    { field: 'primerApellido', headerName: 'Primer Apellido' },
    { field: 'segundoApellido', headerName: 'Segundo Apellido' },
    { field: 'fechaNacimiento', headerName: 'Fecha de Nacimiento' },
    { field: 'nombreUsuario', headerName: 'Nombre de Usuario' },
    { field: 'contraseña', headerName: 'Contraseña' },
    { field: 'habilitado', headerName: 'Habilitado' },
    { field: 'nombreCompleto', headerName: 'Nombre Completo' },
    { field: 'strFechaNacimiento', headerName: 'strFechaNacimiento' },
  ]);

  // ...

  const getRowId = params => params.data.id;

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={users}
        columnDefs={colDefs}
        rowSelection={'single'}
        getRowId={getRowId}
      />
    </div>
  )

}