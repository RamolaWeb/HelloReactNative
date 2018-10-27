import React, {Component} from 'react';
import Welcome from '../Welcome';
import Detail from '../Detail';
import { createStackNavigator } from 'react-navigation';


//FCM Integration
import { checkPermission, createNotificationListener, notificationListener, notificationOpenedListener } from "./Utils/FCMIntegration";


export default class App extends Component {

   componentDidMount(){

      checkPermission();
      createNotificationListener();

    }

  componentWillUnmount() {
    
    notificationListener();
    notificationOpenedListener();

  }

  
  
  render() {
    return (
        <RootStack/>
    );
  }
}


const RootStack = createStackNavigator({
  HomeScreen: {
    screen: Welcome
  },
  DetailScreen: {
    screen: Detail
  },
  initialRouteName: 'HomeScreen',
});


