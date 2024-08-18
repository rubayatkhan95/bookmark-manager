import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../features/counter/CounterSlice';

const Login = ({ navigation, route }) => {
	const { itemId, itemName } = route.params;
	const [value, onChangeText] = React.useState(route.params.title);
	const [postText, setPostText] = React.useState('')


	React.useEffect(() => {
		navigation.setOptions({
			title: value === '' ? 'No title' : value,
		});
	}, [navigation, value])

	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

			<TextInput
				multiline
				placeholder="What's on your mind?"
				style={{ height: 200, padding: 10, backgroundColor: 'pink' }}
				value={postText}
				onChangeText={setPostText}
			/>

			<Button
				title="Done"
				onPress={() => {
					// Pass and merge params back to home screen
					navigation.navigate({
						name: 'Dashboard',
						params: { post: postText },
						merge: true,
					});
				}}
			/>

			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<Text style={{ color: "black" , margin:10}}>Counter : {count}</Text>
			<Button
				title="Decrement Counter"
				onPress={() =>
					dispatch(decrement())
				}
			/>
			<Text style={{ color: "black" , margin:20}}>Login Screen</Text>
			<Text style={{ color: "black" , margin:10}}>itemId: {JSON.stringify(itemId)}</Text>
			<Text style={{ color: "black", margin:10 }}>otherParam: {JSON.stringify(itemName)}</Text>
			<Button
				title="Go to Home"
				onPress={() =>
					navigation.push('Home', {

					})
				}
			/>
			<Button title='Go Back' onPress={() => navigation.goBack()}></Button>
			<Button
				title="Go to Login... again"
				onPress={() =>
					navigation.push('Login', {
						itemId: Math.floor(Math.random() * 100),
						itemName: "itemName"
					})
				}
			/>
			<Button title='Jump  to Dashboard' onPress={() => navigation.popToTop("Dashboard")}></Button>
		</View>
	);
}

export default Login;