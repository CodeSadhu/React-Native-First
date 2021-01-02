import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

	const [name, setName] = useState('CodeSadhu');

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.inputHandler}
				placeholder="Enter name: "
				onChangeText={name => setName(name)}
				defaultValue={name}
			/>
			<Text>My name is {name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputHandler: {
		height: 40,
		width: 80,
		maxWidth: 250,
		backgroundColor: 'pink',
	}
});
