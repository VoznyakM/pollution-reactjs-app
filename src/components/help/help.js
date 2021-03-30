import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
  export default function DenseTable() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
If you see unconscious citizens burning leaves…
It is difficult to find a person who would like to breathe smoke from smoldering leaves or burning steppe. Many would like these violations to stop, but they do not know how to achieve this.
When starting a fight against fires in your community, you need to know that the law is on your side anyway.       
      </TableContainer>
    );
  }
  
  