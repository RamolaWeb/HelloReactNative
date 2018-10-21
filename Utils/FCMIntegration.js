import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';


export function checkPermission(){
    firebase.messaging().hasPermission()
        .then((enabled) => {
            if(enabled){
            }
            else{
                requestPermission();
            }
        });
  }


  function requestPermission(){
        firebase.messaging().requestPermission()
            .then(() => {
            })
            .catch((error) => {

            });
  }


 export function createNotificationListener(){
      notificationDisplayedListener();
      notificationListener();
      notificationOpenedListener();
      initialNotificationListener();

  }

  


  function notificationDisplayedListener(){
      firebase.notifications().onNotificationDisplayed((notification) =>{
          console.log(notification);
      });
  }

  export function notificationListener(){
    firebase.notifications().onNotification((notification) =>{
        console.log(notification);
    });
  }

  export function notificationOpenedListener(){
    firebase.notifications().onNotificationOpened((notification) =>{
        console.log(notification);
    });
  }

  function initialNotificationListener(){
    firebase.notifications().getInitialNotification()
     .then((notification) => {
            console.log(notification);
     });
  }