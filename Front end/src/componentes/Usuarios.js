import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Usuarios.css';
import data from './Usuarios.json';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact, AgReactComponent } from 'ag-grid-react'; //AG Grid Component
import { GridComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { registerLicense } from '@syncfusion/ej2-base';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmRCekx0THxbf1x0ZFdMYFlbRHdPIiBoS35RckVgWn9fdHRQQmZcV0Z3');
function Usuarios() {

    // Row Data: The data to be displayed.
    // const [rowData, setRowData] = useState([
    //     { ID: "Tesla", Nombre: "Model Y", PrimerApellido: 64950, SegundoApellido: true },
    //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
    //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    // ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs] = useState([
        { field: "id" },
        { field: "Nombre" },
        { field: "PrimerApellido" },
        { field: "SegundoApellido" },
        { field: "Corrreo" },
        { field: "Telefono" },
        { field: "NombredeUsuario" }
    ]);

    const [gridApi] = useState();
    fetch('./Usuarios.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        gridApi.setGridOption('rowData', data);
    })

    fetch('./Usuarios.json').
    then(function (response) {

        return response.json();

    }).then(function (data) {

        // set the column headers from the data

        const colDefs = gridOptions.api.getColumnDefs();
        colDefs.length=0;
        const keys = Object.keys(data[0])
        keys.forEach(key => colDefs.push({field : key}));
        gridOptions.api.setGridOption('columnDefs', colDefs);

        // add the data to the grid
        gridOptions.api.setRowData('rowData', data);
    })

    const columnDefs = [

    ];

    const gridOptions = {
        columnDefs : columnDefs,
        enableSorting: true,
        enableFilter: true,
        pagination: true
    };

    fetch(data).then(function (response){
        return response.json();
    }).then(function (data){
        const colDefs = gridOptions.api.getColumnDefs();
        colDefs.length=0;
        const keys = Object.keys(data[0]);
        keys.forEach(key => colDefs.push({field: key}));
        gridOptions.api.setColumnDefs(colDefs);

        gridOptions.api.setRowdata(data);
    })

    const [setRowData] = useState([]);
    const [rowData] = useState([
        useEffect(() => {
            fetch(data)
                .then(res => res.json())
                .then(result => setRowData(result.data));
        }, [])
    ]);

    

    

    return (
        <div>
            <div style={{ margin: '10%', marginTop: '5%' }}>
                <GridComponent dataSource={data}>
                    <ColumnsDirective>
                        <ColumnDirective field='id' headerText='ID' textAlign='Right' width ='100' />
                        <ColumnDirective field='Nombre' headerText='Nombre' textAlign='Right' width ='100' />
                        <ColumnDirective field='PrimerApellido' headerText='Primer Apellido' textAlign='Right' width ='100' />
                        <ColumnDirective field='SegundoApellido' headerText='Segundo Apellido' textAlign='Right' width ='100' />
                        <ColumnDirective field='Correo' headerText='Correo' textAlign='Right' width ='100' />
                        <ColumnDirective field='Telefono' headerText='Telefono' textAlign='Right' width ='100' />
                        <ColumnDirective field='NombredeUsuario' headerText='Nombre de Usuario' textAlign='Right' width ='100' />
                    </ColumnsDirective> 
                </GridComponent>
            </div>

            <div className='Usuarios'>
                <h2>a</h2>
                <div className="ag-theme-alpine ag-style">
                    
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                    />
                </div>
            </div>
        // wrapping container with theme & size
            <Form
                className="ag-theme-quartz" //applying the grid theme
                style={{ height: 500 }} // the grid will fill the size of the parent container
            >


                <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                />
            </Form>
        </div>



    )
}

export default Usuarios;