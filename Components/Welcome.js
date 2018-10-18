import React , { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { saveData } from '../Utils/Preference'

export default class Welcome extends Component{

	constructor(props){
		super(props);
		this.state = {text : ''};
	}
    
    startNextScreen = () => {
    	this.props.navigation.navigate('DetailScreen');
    };

    saveData = () =>{
    		saveData("Name", this.state.text);
    };

	render(){
		return(
			<View>
				
				<TextInput
					placeholder="Type here to Save!" 
                    onChangeText={(text) => this.setState({text})}
                    
				/>

				<Text
				onPress = {() => this.saveData()} 
				>{'Save Data'}</Text>
				
				<Text
				onPress = {() => this.startNextScreen()} 
				>{'Start Next Screen'}</Text>

			</View>
			
			);
	}
}