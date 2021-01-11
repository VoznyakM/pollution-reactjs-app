import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
    Button,
    Field,
    Form,
    RadioGroup,
    Select,
  } from 'react-form-package';

  
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

  
  export default function DenseTable() {
    const classes = useStyles();
 
    
    return (
        <Form
          validate
        >
          {/* <div>
            <div>checkbox</div>
            <Field type="checkbox" id="checkbox" />
          </div> */}
          <div>
            <div>Опис зафіксованої проблеми</div>
            <Field rows="10" cols="60" type="textarea" id="textarea" />
          </div>
          {/* <div>
            <div>date</div>
            <Field type="date" id="date" />
          </div> */}
          <div>
            <div>Дата і час фіксації</div>
            <Field type="datetime-local" id="datetime-local" />
          </div>
          <br />
          <div>
            <div>Геокоординати ділянки</div>
            <Field type="email" id="email" />
          </div>
          <br />
          <div>
            <div>Рівень підпалу за 10-бальною шкалою</div>
            <Field type="number" id="number" />
          </div>
          <br />
          <div>
            <div>Контактний телефон фіксатора</div>
            <Field type="tel" id="tel" />
          </div>
          {/* <div>
            <div>text</div>
            <Field type="text" id="text" />
          </div> */}
          {/* <div>
            <div>password</div>
            <Field type="password" id="password" />
          </div>
          <div>
            <div>time</div>
            <Field type="time" id="time" />
          </div>
          <div>
            <div>url</div>
            <Field type="url" id="url" />
          </div> */}
          <br />
          <div>
            <div>Рівень підпалу за 10-бальною шкалою</div>
            <Select id="select" type="select">
              <option disabled value="">--- Choose an option ---</option>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </Select>
          </div>
          <br />
          <div>
            <div>Стан підпалу</div>
            <RadioGroup type="radio" id="radio">
              <input type="radio" name="radio" id="radio1" />
              Проблему зафіксовано
              <br />
              <input type="radio" name="radio" id="radio2" />
              Про проблему повідомлено в поліцію
              <br />
              <input type="radio" name="radio" id="radio3" />
              Проблему усунуто
            </RadioGroup>
          </div>
          <br />
          <div>
            <Button id="submit" type="submit" onClick={(state) => console.log(state)}>Зафіксувати</Button>
          </div>
        </Form>
        );   
 
  }
  
  