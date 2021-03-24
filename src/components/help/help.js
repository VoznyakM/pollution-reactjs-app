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
Якщо ви бачите, як несвідомі громадяни палять листя…
Важко знайти людину, якій би подобалось дихати димом від тліючого листя чи палаючого степу. Багато хто хотів би, щоб ці порушення припинились, але як досягти цього не знають.
Починаючи боротьбу із палами у своєму населеному пункті, ви повинні знати, що закон у будь-якому випадку на вашій стороні.        
      </TableContainer>
    );
  }
  
  