import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
// import covidService from '../../services/covid.service';

// import IconButton from '@material-ui/core/IconButton';
// import ShareIcon from '@material-ui/icons/Share';
// import Share from 'material-ui-share';
import ReactShareSocial from 'react-share-social';

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
      let url = '';
      let method = '';
      // console.log(state.data);
      if (state.data.id) {
        url = process.env.REACT_APP_BACKEND_API + '/area/' + state.data.id;
        method = "PATCH";
      } else {
        url = process.env.REACT_APP_BACKEND_API + '/area';
        method = "POST";
      }
      
      const response = await fetch(url, {
      method: method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(state.data)
      });      
      alert('Thanks, problem is reported');
    } catch(error) {
      alert('Please try again');
    }
  } 

  export default function DenseTable() {
    
    const [state, setState] = useState([]);

    const handleOnLoad = async (record_id) => {      
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_API + '/area/' + record_id
        );
        const data = await response.json();        
        console.log(response); 
        setState({
          loading: true,
          response: data
        });
      } catch(error) {
        alert('Please try again');
      }
    } 

    const location = useLocation();
    var lat = location.state ? location.state.lat : 0;
    var lng = location.state ? location.state.lng : 0;
    var record_id = location.state ? location.state.id : 0;
    
    useEffect(() => {
      handleOnLoad(record_id);   
    }, []);

    const row = state.response;

    if (!state.loading) {
      return ( <CircularProgress /> );
    }

    if (!lat) lat = row.lat;
    if (!lng) lng = row.lng;
    if (!row.description) row.description = location.state ? location.state.description : '';
    
    return (
      <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h3>
        
        {/* <Share
          title='This is a cool title'
          text='Oh you want some text for this share component'
          url='https://developers.google.com/web/updates/2016/09/navigator-share'
        /> */}

          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ShareIcon />
          </IconButton> */}

  <ReactShareSocial 
     url ="wildfirealert.com"
     socialTypes={['facebook','twitter']}
   />

      Повідомте про інцидент </h3>
        <Form
          validate
        >
          <Field type="hidden" id="id" name="id" value={row.id} />
          <div>
            <div>Опис проблеми</div>
            <Field rows="10" cols="40" type="textarea" id="description" name="description" placeholder="Детальний опис інциденту" value={row.description} />
          </div>
          <div>
            <div>Дата та час звіту</div>
            <Field type="datetime-local" id="datetime-local" />
          </div>
          <br />
          <div>
            <div>Широта</div>
            <Field type="text" id="lat" name="lat" value={lat} />
          </div>
          <br />
          <div>
            <div>Довгота</div>
            <Field type="text" id="lng" name="lng" value={lng} />
          </div>
          <br />
          <div>
            <div>Адреса інциденту</div>
            <Field type="text" id="address" name="address" value={row.address} />
          </div>
          <br />
          <div>
            <div>Контактний телефон</div>
            <Field type="tel" id="tel" value={row.phone} />
          </div>
          <br />
          <div>
            <div>Рівень забруднення за впливом на здоров'я</div>
            <Select id="level" type="select" name="level" value={row.level}>
              <option disabled value="">--- Вибір ---</option>
              <option value="1">Низький</option>
              <option value="2">Середній</option>
              <option value="3">Високий</option>
            </Select>
          </div>
          <br />
          <div>
            <div>Статус звіту</div>
            <RadioGroup type="radio" id="radio">
              <input value="1" type="radio" name="radio" id="radio1" checked />
              Про проблему було повідомлено
              <br />
              <input value="2" type="radio" name="radio" id="radio2" />
              Поліцію було повідомлено про проблему
              <br />
              <input value="3" type="radio" name="radio" id="radio3" />
              Проблема виправлена
            </RadioGroup>
          </div>
          <br />
          <div>
            {/* <Button id="submit" type="submit" onClick={(state) => console.log(state)}>Зафіксувати</Button> */}
            <Button id="submit" type="submit" onClick={(state) => handleOnClick(state)}>Повідомити</Button>
          </div>
        </Form>
        </Paper>
        );   
 
  }
  
  