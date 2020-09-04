import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
// import * as PusherPushNotifications from '@pusher/push-notifications-web'

// const beamsClient = new PusherPushNotifications.Client({
//     instanceId: '1927be8c-d256-4d48-b1a1-c823d23c3fba',
//   });

// beamsClient.start()
//     .then(() => beamsClient.addDeviceInterest('hello'))
//     .then(() => console.log('Successfully registered and subscribed!'))
//     .catch(console.error);

ReactDOM.render(<App />, document.getElementById('root') );
serviceWorker.register();
