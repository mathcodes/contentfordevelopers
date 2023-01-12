import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Table.scss";
// import placeholderLogo from "../../assets/Images/jCircle.png";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';




function Table({rows, columns}) {


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Table;
