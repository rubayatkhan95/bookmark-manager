import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName, increment, incrementByAmount } from '../../features/counter/CounterSlice';

const Dashboard = ({ navigation: { navigate }, route }) => {
	React.useEffect(() => {
		if (route.params?.post) {
			console.warn("hiii")
		}
	}, [route.params?.post])

	const count = useSelector((state) => state.counter.value)
	const userName = useSelector((state) => state.counter.userName)
	const dispatch = useDispatch()

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

			<Text style={{ margin: 10, color: "pink" }}>Post: {route.params?.post}</Text>
			<Button
				title='Increment'
				onPress={() => {
					dispatch(incrementByAmount(10));
					dispatch(changeUserName("Porr"))

				}

				}
			/>
			<Text style={{ color: "black", margin: 20 }}>Dashboard Screen Counter {count} {userName}</Text>
			<Button
				title='Go to Login'
				onPress={() =>
					navigate("Login", {
						itemId: 86,
						itemName: "New Item",
						title: ""
					})
				}
			/>
		</View>
	);
}

export default Dashboard;