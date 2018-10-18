import { AsyncStorage } from 'react-native';

export async function saveData(key , data){
	try{
		await AsyncStorage.setItem(key, data);
	}
	catch(error){

	}
}

export async function getData(key){
	const data = await AsyncStorage.getItem(key);
	return data;
}