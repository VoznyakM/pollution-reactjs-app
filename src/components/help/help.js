import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
  export default function DenseTable() {
    const classes = useStyles();
    return <>
    <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
  
  <Typography component={'div'}>
  <ul>
  <p>Шкода від спалювання листя і сухої трави багатолика і надзвичайно небезпечна. На превеликий жаль, українці рідко надають цьому уваги. При згорянні однієї тони рослинних залишків у повітря вивільняється біля 9 кг мікрочастинок диму. До їх складу входять пил, окиси азоту, угарний газ, важкі метали і низка канцерогенних сполук. В тліючому, без доступу кисню, листі виділяється бензопірен, що здатен викликати у людини ракові захворювання. Окрім того, з димом у повітря вивільняються діоксини – одні з найотруйніших для людини речовин. Що можна зробити, щоб зменшити забруднення повітря та негативний вплив на здоров’я людей?</p>
  <li>Не спалюйте сміття, меблі, будівельні матеріали, особливо штучно оброблену деревину і ДВП.</li>
  <li>Пам’ятайте, що заборонено спалювати такі предмети як картон, всі види пластмас, включаючи пластмасові пляшки з під молока та пластикові пакети, гуму та продукти з неї. Натомість здавайте ці матеріали у пункти вторинної переробки сировини.</li>
  <li>Ви можете зменшити забруднення повітря шляхом збільшення величини труби вашого каміну та спалюванням чистого, сухого необробленого та не пофарбованого дерева</li>
  <li>Використовуйте компостування та його продукти у вигляді мульчі або інші варіанти безпечної переробки сміття</li> 
  </ul>
  </Typography>
  </Paper>
    </>;
  } 