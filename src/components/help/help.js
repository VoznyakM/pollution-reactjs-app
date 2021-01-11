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
  
  function createData(id, name, category, impact) {
    return { id, name, category, impact };
  }
  
  const rows = [
    createData('0', '0-50', 'Хороший', 'Мінімальний вплив'),
    createData(1, '51-100', 'Задовільний',	'Може викликати незначний дискомфорт при диханні у чутливих людей. Не рекомендується займатись спортом на вулиці'),
    createData(2, '101-150', 'Помірно забруднений', 'Може спричинити дискомфорт при диханні у людей із захворюваннями дихальних шляхів, таких як астма, а також у людей з серцевими захворюваннями. Діти та літні люди зазнають найбільшого негативного впливу. Заняття спортом на вулиці заборонені'),
    createData(3, '151-200', 'Високий',	'Спричиняє дискомфорт при диханні у здорових людей. Людям із серцево-судинними і легеневими захворюваннями категорично заборонено перебувати на вулиці. Заняття спортом на вулиці заборонені'),
    createData(4, '201-300', 'Дуже високий',	'Може викликати респіраторні захворювання у здорових людей при тривалому впливі. Людям із серцево-судинними і легеневими захворюваннями категорично заборонено перебувати на вулиці. При такому забрудненні існує ризик інсульту та інфаркту у людей похилого віку. Заняття спортом на вулиці заборонені'),
    createData(5, '300+', 'Небезпечний',	'Впливає навіть на здорових людей, і може спричинити серйозні наслідки для їх здоровя. Людям із серцево-судинними захворюваннями категорично заборонено перебувати на вулиці. Негативні наслідки можуть виникнути навіть під час легкої фізичної активності. Існує ризик інсульту та інфаркту'),
  ];
  
  export default function DenseTable() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>AQI</TableCell>
              <TableCell align="left">Категорія</TableCell>
              <TableCell align="left">Наслідки для здоров'я</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={"row-" + row.id} >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  