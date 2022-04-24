import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { M06_Home } from "./app/views/M06_Home_routing";
import { M07_Camera } from "./app/views/M07_Camera";
import { M08_Mapes } from "./app/views/M08_Mapes";
import { M10_Ayuda } from "./app/views/M10_Ayuda";
import * as Location from "expo-location";

/**
 * Modificacions al component principal d'entrada de React
 * per incloure encaminaments, però no components
 * @version 1.0 28.03.2020
 * @author sergi.grau@fje.edu
 */

const Stack = createStackNavigator();

function MapLocation() {
	const [location, setLocation] = useState(null);
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);
	return <M08_Mapes></M08_Mapes>;
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={M06_Home} />
				<Stack.Screen name="Camera" component={M07_Camera} />
				<Stack.Screen name="Mapes" component={MapLocation} />
				<Stack.Screen name="Ayuda" component={M10_Ayuda} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
