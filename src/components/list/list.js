import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import Paper from '@material-ui/core/Paper';


// export default function BasisPaginationGrid(props) {
const BasisPaginationGrid = props => {

    // const { data } = useDemoData({
    //   dataSet: 'Commodity',
    //   rowLength: 1000,
    //   maxColumns: 6,
    // });

    const [state, setState] = useState([]);

    function getStatus(val) {
        switch (val) {
            default: case 1: return 'Зафіксовано';
            case 2: return 'Повідомлено';
            case 3: return 'Усунуто';
        }
    }

    const fetchData = async () => {        
        const response = await fetch(
          process.env.REACT_APP_BACKEND_API + '/area'
        );
        const areas = await response.json();
        setState({  loading: true,
                    volume_map_data:                       
                        areas.map(vol => ({
                          id: vol.id,
                          title: vol.description,
                          address: vol.address,
                          phone: vol.phone,
                          level: vol.level,
                          status_id: getStatus(vol.status_id),
                        }))   
        });
    }   

    useEffect(() => {
        fetchData();   
    }, []);
    
    // console.log('states:' + state);

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 230 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'level', headerName: 'Level', type: 'number', width: 90 },
    { field: 'status_id', headerName: 'Status', type: 'number', width: 130 },
    {
        field: "",
        headerName: "Status",
        sortable: false,
        width: 150,
        disableClickEventBubbling: true,
        renderCell: (params: CellParams) => {
          const onClick = () => {
            const api: GridApi = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};
    
            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
    
            return alert(JSON.stringify(thisRow, null, 4));
          };
    
          return <Button onClick={onClick}>Update status</Button>;
        }
      },    
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const rows = state.volume_map_data;
   
  if (!state.loading) {
    return ( <CircularProgress /> );
  }

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid pageSize={20} rowsPerPageOptions={[5, 10, 20]} pagination rows={rows} columns={columns} />   
        {/* {...data} */}
      </div>
    );
  }

export default BasisPaginationGrid;
