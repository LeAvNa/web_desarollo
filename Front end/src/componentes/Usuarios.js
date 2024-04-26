import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import axios from "axios";

export default function Usuarios() {

  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    axios.get('http://187.189.158.186:7777/Usuario')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  // // function click() {
  // //   axios.get('https://jsonplaceholder.typicode.com/posts')
  // //     .then(response => {
  // //       response = (response.data)
  // //       console.log(response)
  // //       setRows(response)
  // //       console.log(rows)
  // //     })
  // //     .catch(error => {
  // //       console.error('Error fetching data: ', error);
  // //     }); 

  // // }

  // Row Data: The data to be displayed.
  // const [rowData, setRowData] = useState([
  //   {
  //     "id": 1,
  //     "Nombre": "Juan",
  //     "PrimerApellido": "González",
  //     "SegundoApellido": "Pérez",
  //     "Correo": "juan.gonzalez@example.com",
  //     "Telefono": "123456789",
  //     "NombredeUsuario": "juang"
  //   },
  //   {
  //     "id": 2,
  //     "Nombre": "María",
  //     "PrimerApellido": "López",
  //     "SegundoApellido": "García",
  //     "Correo": "maria.lopez@example.com",
  //     "Telefono": "987654321",
  //     "NombredeUsuario": "marial"
  //   },
  //   {
  //     "id": 3,
  //     "Nombre": "Carlos",
  //     "PrimerApellido": "Martínez",
  //     "SegundoApellido": "Rodríguez",
  //     "Correo": "carlos.martinez@example.com",
  //     "Telefono": "456789123",
  //     "NombredeUsuario": "carlosm"
  //   },
  //   {
  //     "id": 4,
  //     "Nombre": "Ana",
  //     "PrimerApellido": "Fernández",
  //     "SegundoApellido": "López",
  //     "Correo": "ana.fernandez@example.com",
  //     "Telefono": "741852963",
  //     "NombredeUsuario": "anaf"
  //   },
  //   {
  //     "id": 5,
  //     "Nombre": "Pedro",
  //     "PrimerApellido": "Sánchez",
  //     "SegundoApellido": "Martínez",
  //     "Correo": "pedro.sanchez@example.com",
  //     "Telefono": "369258147",
  //     "NombredeUsuario": "pedros"
  //   },
  //   {
  //     "id": 6,
  //     "Nombre": "Laura",
  //     "PrimerApellido": "Díaz",
  //     "SegundoApellido": "Fernández",
  //     "Correo": "laura.diaz@example.com",
  //     "Telefono": "852147963",
  //     "NombredeUsuario": "laurad"
  //   },
  //   {
  //     "id": 7,
  //     "Nombre": "Javier",
  //     "PrimerApellido": "Pérez",
  //     "SegundoApellido": "Sánchez",
  //     "Correo": "javier.perez@example.com",
  //     "Telefono": "951753852",
  //     "NombredeUsuario": "javierp"
  //   },
  //   {
  //     "id": 8,
  //     "Nombre": "Sara",
  //     "PrimerApellido": "García",
  //     "SegundoApellido": "Martínez",
  //     "Correo": "sara.garcia@example.com",
  //     "Telefono": "753951852",
  //     "NombredeUsuario": "sarag"
  //   },
  //   {
  //     "id": 9,
  //     "Nombre": "Miguel",
  //     "PrimerApellido": "Hernández",
  //     "SegundoApellido": "Sánchez",
  //     "Correo": "miguel.hernandez@example.com",
  //     "Telefono": "159753852",
  //     "NombredeUsuario": "miguelh"
  //   },
  //   {
  //     "id": 10,
  //     "Nombre": "Lucía",
  //     "PrimerApellido": "Martín",
  //     "SegundoApellido": "Pérez",
  //     "Correo": "lucia.martin@example.com",
  //     "Telefono": "852963741",
  //     "NombredeUsuario": "luciam"
  //   },
  //   {
  //     "id": 11,
  //     "Nombre": "Daniel",
  //     "PrimerApellido": "Jiménez",
  //     "SegundoApellido": "Gómez",
  //     "Correo": "daniel.jimenez@example.com",
  //     "Telefono": "369147258",
  //     "NombredeUsuario": "danield"
  //   }
  // ]);



  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: 'id', headerName: 'ID' },
    { field: 'Nombre', headerName: 'Nombre' },
    { field: 'PrimerApellido', headerName: 'Primer Apellido' },
    { field: 'SegundoApellido', headerName: 'Segundo Apellido' },
    { field: 'Correo', headerName: 'Correo' },
    { field: 'Telefono', headerName: 'Teléfono' },
    { field: 'NombredeUsuario', headerName: 'Nombre de Usuario' },
  ]);

  // ...


  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={'single'}
      />
    </div>
  )

}