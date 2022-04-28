import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Dashboard() {
  const [rowData, setRowData] = useState([]);

  /*useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
         .then(result => result.json())
         .then(rowData => setRowData(rowData))
     }, []);*/

  /*useEffect(() => {
        fetch('https://randomuser.me/api?results=50')
         .then(result => result.json())
         .then(rowData.params.api.applyTransaction({add:rowData}))
         //.then(rowData => setRowData(rowData))
         
     }, []);*/

  const defaultColDef = {
    // set filtering on for all columns
    sortable: true,
    filter: true,
  };

  const [columnDefs] = useState([
    { headeName: 'Image', field: 'picture', cellRenderer: pictureFormatter },
    {
      headeName: 'Name',
      field: 'name',
      valueFormatter: namesFormatter,
      comparator: (valueA, valueB) => {
        console.log(valueA + ' ' + valueB);
        if (valueA.first == valueB.first) return 0;
        return valueA.first > valueB.first ? 1 : -1;
      },
    },
    { headeName: 'Email', field: 'email' },
    { headeName: 'Gender', field: 'gender' },
    { headeName: 'Phone Number', field: 'phone' },
  ]);

  const onGridReady = (params) => {
    console.log('grid is ready');
    fetch('https://randomuser.me/api?results=50')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        params.api.applyTransaction({ add: resp.results });
      });
  };

  function pictureFormatter(params) {
    //console.log(params.value.thumbnail)
    return <img src={params.value.thumbnail}></img>;
  }

  function namesFormatter(params) {
    // console.log(params)
    return params.value.first + ' ' + params.value.last;
  }
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div>
      <div className='ag-theme-alpine' style={{ height: 550, width: 1000 }}>
        <AgGridReact
          //rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
      logout
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
}

export default Dashboard;
