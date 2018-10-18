import React, {Component} from 'react';
import Welcome from './Components/Welcome';
import Detail from './Components/Detail';
import { createStackNavigator } from 'react-navigation';



export default class App extends Component {
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


