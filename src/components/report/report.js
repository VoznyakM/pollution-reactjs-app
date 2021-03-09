import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
// import covidService from '../../services/covid.service';

import {
    Button,
    Field,
    Form,
    RadioGroup,
    Select,
  } from 'react-form-package';

  async function handleOnClick(state) {
    try {
      // this.covidService.postProblem
      const response = await fetch(process.env.REACT_APP_BACKEND_API + '/area', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(state.data)
      });      
      alert('Дякуємо, проблему зафіксовано');
    } catch(error) {
      alert('Спробуйте ще раз');
    }
  } 

  export default function DenseTable() {
    
    const [state, setState] = useState([]);
    const location = useLocation();
    var lat = location.state ? location.state.lat : 0;
    var lng = location.state ? location.state.lng : 0;

    return (
      <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h3>Фіксація підпалу</h3>
        <Form
          validate
        >
          <div>
            <div>Опис зафіксованої проблеми</div>
            <Field rows="10" cols="40" type="textarea" id="description" name="description" placeholder="Детальний опис проблеми" />
          </div>
          <div>
            <div>Дата і час фіксації</div>
            <Field type="datetime-local" id="datetime-local" />
          </div>
          <br />
          <div>
            <div>Геокоордината lat ділянки</div>
            <Field type="text" id="lat" name="lat" value={lat} />
          </div>
          <br />
          <div>
            <div>Геокоордината lng ділянки</div>
            <Field type="text" id="lng" name="lng" value={lng} />
          </div>
          <br />
          <div>
            <div>Адреса зафіксованого підпалу</div>
            <Field type="text" id="address" name="address" />
          </div>
          <br />
          <div>
            <div>Контактний телефон фіксатора</div>
            <Field type="tel" id="tel" />
          </div>
          <br />
          <div>
            <div>Рівень забруднення за впливом на здоров'я</div>
            <Select id="level" type="select" name="level">
              <option disabled value="">--- Вибір ---</option>
              <option value="1">Хороший</option>
              <option value="2">Задовільний</option>
              <option value="3">Помірно забруднений</option>
              <option value="4">Високий</option>
              <option value="5">Дуже високий</option>
              <option value="6">Небезпечний</option>
            </Select>
          </div>
          <br />
          <div>
            <div>Стан підпалу</div>
            <RadioGroup type="radio" id="radio" >
              <input value="1" type="radio" name="radio" id="radio1" checked />
              Проблему зафіксовано
              <br />
              <input value="2" type="radio" name="radio" id="radio2" />
              Про проблему повідомлено в поліцію
              <br />
              <input value="3" type="radio" name="radio" id="radio3" />
              Проблему усунуто
            </RadioGroup>
          </div>
          <br />
          <div>
            {/* <Button id="submit" type="submit" onClick={(state) => console.log(state)}>Зафіксувати</Button> */}
            <Button id="submit" type="submit" onClick={(state) => handleOnClick(state)}>Зафіксувати</Button>
          </div>
        </Form>
        </Paper>
        );   
 
  }
  
  