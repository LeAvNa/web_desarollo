import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getUsers, getUserUnique } from '../redux/actions/actionUsers';

export default function Usuarios() {

  // Rellenar grid con datos
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.getUsers);


  // Obtener la id del usuario. 
  var [id] = useState();
  const gridRef = useRef();
  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].nombre : "";
    console.log(selectedRows[0].idUsuario);
    id = selectedRows[0].idUsuario;
    console.log(id)
  }, []);



  useEffect(() => {
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
    { field: 'strFechaNacimiento', headerName: 'Fecha de Nacimiento' },
  ]);



  // ...

  return (

    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <div>
        Usuario seleccionado:
        <span id="selectedRows"></span>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={users}
        columnDefs={colDefs}
        rowSelection={"single"}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  )

}