import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import covidService from '../../services/covid.service';

export default class Settings extends Component {

  covidService = new covidService();

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <>
      {/* <form>
        <h1>Налаштування</h1>
        <h2>привіт, {this.state.username}</h2>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
      </form> */}
        <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
        <h1>Stop Pandemia</h1>
        <Typography variant="h6">
        Проєкт реалізовано за підтримки UPSHIFT Україна та Центру Освітніх Інновацій.​
        <br /><br />
        <p>
        Мета проєкту – створити доступний аналог безконтактного дезінфектора, а також розробка додатку 
        
        для оповіщення користувачів інформацією про ризики захворювання з цільовим призначенням в закладах 
        освіти.​</p>

        <p>Наш сайт: <Link href="https://stoppandemia.com.ua" >https://stoppandemia.com.ua</Link></p>
        <p>Керівники проєкту: Марія Починок, Казмерчук Анатолій, Аронець Олександр</p>
        <p>Команда проєкту: 
          <br />
          Возняк Мирослав - розробка додатку та сайту
          <br />  
          Бублик Анатолій - математичне моделювання
          <br />
          Тумир Юрій - створення безконтактних дезінфекторів
          <br />
          Гафійчук Христина - просвітницька робота
          <br />
          Угринчук Юрій - асистент
          <br />
          <br />        
          <img src="http://www.stoppandemia.com.ua/wp-content/uploads/2020/10/unicef-logo-vector.png" width="260" />
          <br />
          <img src="http://www.stoppandemia.com.ua/wp-content/uploads/2020/10/logo-fond-ukr-bez-fona-v-png.png" width="260" />
          <br />
          <br />
          <br />   
          <img src="http://www.stoppandemia.com.ua/wp-content/uploads/2020/10/upshift-ukraine-secondary-logo_white_ukr.png" width="250" />
        </p>

        </Typography>
        </Paper>
      </>
    );
  }
}

