import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {getData} from '../../Utils/Preference';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: '',
		}
	}

	componentDidMount() {
        getData('Name').then((value) => {
            this.setState({"data": value});
        }).done();
    }

	render(){
		return(
			<Text>{this.state.data}</Text>
			);
	}
}