import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import covidService from '../../services/covid.service';

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
  

  // handleSubmit(e) {
  //   e.preventDefault();
  
  //   fetch('http://localhost:3002/send', {
  //       method: "POST",
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //     }).then(
  //     (response) => (response.json())
  //       ).then((response)=> {
  //     if (response.status === 'success') {
  //       alert("Message Sent."); 
  //       this.resetForm()
  //     } else if(response.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // }

  async function handleOnClick(state) {
    try {
      // this.covidService.postProblem
      const response = await fetch(process.env.REACT_APP_BACKEND_API + '/report', {
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
            <Field rows="10" cols="40" type="textarea" id="description" name="description" />
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
            <div>Геокоордината lat ділянки</div>
            <Field type="text" id="lat" name="lat" />
          </div>
          <br />
          <div>
            <div>Геокоордината lng ділянки</div>
            <Field type="text" id="lng" name="lng" />
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
            <div>Рівень підпалу за 10-бальною шкалою</div>
            <Select id="level" type="select" name="level">
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
            {/* <Button id="submit" type="submit" onClick={(state) => console.log(state)}>Зафіксувати</Button> */}
            <Button id="submit" type="submit" onClick={(state) => handleOnClick(state)}>Зафіксувати</Button>
          </div>
        </Form>
        );   
 
  }
  
  