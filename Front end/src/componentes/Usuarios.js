import 'bootstrap/dist/css/bootstrap.min.css';
import './Usuarios.css';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Usuarios() {

  const usuarios = [
    {
      "id": 1,
      "Nombre": "Juan",
      "PrimerApellido": "González",
      "SegundoApellido": "Pérez",
      "Correo": "juan.gonzalez@example.com",
      "Telefono": "123456789",
      "NombredeUsuario": "juang"
    },
    {
      "id": 2,
      "Nombre": "María",
      "PrimerApellido": "López",
      "SegundoApellido": "García",
      "Correo": "maria.lopez@example.com",
      "Telefono": "987654321",
      "NombredeUsuario": "marial"
    },
    {
      "id": 3,
      "Nombre": "Carlos",
      "PrimerApellido": "Martínez",
      "SegundoApellido": "Rodríguez",
      "Correo": "carlos.martinez@example.com",
      "Telefono": "456789123",
      "NombredeUsuario": "carlosm"
    },
    {
      "id": 4,
      "Nombre": "Ana",
      "PrimerApellido": "Fernández",
      "SegundoApellido": "López",
      "Correo": "ana.fernandez@example.com",
      "Telefono": "741852963",
      "NombredeUsuario": "anaf"
    },
    {
      "id": 5,
      "Nombre": "Pedro",
      "PrimerApellido": "Sánchez",
      "SegundoApellido": "Martínez",
      "Correo": "pedro.sanchez@example.com",
      "Telefono": "369258147",
      "NombredeUsuario": "pedros"
    },
    {
      "id": 6,
      "Nombre": "Laura",
      "PrimerApellido": "Díaz",
      "SegundoApellido": "Fernández",
      "Correo": "laura.diaz@example.com",
      "Telefono": "852147963",
      "NombredeUsuario": "laurad"
    },
    {
      "id": 7,
      "Nombre": "Javier",
      "PrimerApellido": "Pérez",
      "SegundoApellido": "Sánchez",
      "Correo": "javier.perez@example.com",
      "Telefono": "951753852",
      "NombredeUsuario": "javierp"
    },
    {
      "id": 8,
      "Nombre": "Sara",
      "PrimerApellido": "García",
      "SegundoApellido": "Martínez",
      "Correo": "sara.garcia@example.com",
      "Telefono": "753951852",
      "NombredeUsuario": "sarag"
    },
    {
      "id": 9,
      "Nombre": "Miguel",
      "PrimerApellido": "Hernández",
      "SegundoApellido": "Sánchez",
      "Correo": "miguel.hernandez@example.com",
      "Telefono": "159753852",
      "NombredeUsuario": "miguelh"
    },
    {
      "id": 10,
      "Nombre": "Lucía",
      "PrimerApellido": "Martín",
      "SegundoApellido": "Pérez",
      "Correo": "lucia.martin@example.com",
      "Telefono": "852963741",
      "NombredeUsuario": "luciam"
    },
    {
      "id": 11,
      "Nombre": "Daniel",
      "PrimerApellido": "Jiménez",
      "SegundoApellido": "Gómez",
      "Correo": "daniel.jimenez@example.com",
      "Telefono": "369147258",
      "NombredeUsuario": "danield"
    }
  ];

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'Nombre', name: 'Nombre' },
    { key: 'PrimerApellido', name: 'Primer Apellido' },
    { key: 'SegundoApellido', name: 'Segundo Apellido' },
    { key: 'Correo', name: 'Correo' },
    { key: 'Telefono', name: 'Teléfono' },
    { key: 'NombredeUsuario', name: 'Nombre de Usuario' },
  ];

  const columns1 = [
    { key: 'userId', name: 'userId' },
    { key: 'id', name: 'id' },
    { key: 'title', name: 'title' },
    { key: 'body', name: 'body' }
  ];


  const [rows, setRows] = useState([]);


  function click() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        response = (response.data)
        console.log(response)
        setRows(response)
        console.log(rows)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      }); 
      
  }






  return (
    <div>
      <Button onClick={click}>Actualizar</Button>
      <DataGrid columns={columns1} rows={rows} />
    </div>

  )
}

