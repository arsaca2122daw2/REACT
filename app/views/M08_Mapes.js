import React from "react";
import { StyleSheet, Dimensions, Text, View, Pressable, Image } from "react-native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	mapStyle: {
		width: Dimensions.get("screen").width,
		height: Dimensions.get("screen").height,
	},
	buttons: { top: -100, width: 50, height: 50, borderRadius: 100, backgroundColor: "white", position: "absolute" },

	camara: {
		top: 12,
		left: 13,
	},
});
const mode = "driving"; // 'walking';

export class M08_Mapes extends React.Component {
	coords = [
		{
			lat: 41.390205,
			lng: 2.174007,
		},
		{
			lat: 41.380205,
			lng: 2.175007,
		},
	];
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Mapa </Text>
				<MapView
					style={styles.mapStyle}
					initialRegion={{
						latitude: this.coords[0].lat,
						longitude: this.coords[0].lng,
						latitudeDelta: 0.0622,
						longitudeDelta: 0.0121,
					}}
				>
					<MapView.Marker
						coordinate={{
							latitude: this.coords[0].lat,
							longitude: this.coords[0].lng,
						}}
						title={"sortida"}
						description={"punt A"}
					></MapView.Marker>

					<MapView.Marker
						coordinate={{
							latitude: this.coords[1].lat,
							longitude: this.coords[1].lng,
						}}
						title={"arribada"}
						description={"punt B"}
					/>
					<MapView.Polyline
						coordinates={[
							{ latitude: 41.390205, longitude: 2.174007 },
							{ latitude: 41.380205, longitude: 2.175007 },
						]}
						strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
						strokeColors={[
							"#7F0000",
							"#00000000", // no color, creates a "long" gradient between the previous and next coordinate
							"#B24112",
							"#E5845C",
							"#238C23",
							"#7F0000",
						]}
						strokeWidth={6}
					/>
				</MapView>
				<View style={{ position: "absolute", top: 730, left: 20, right: 0, bottom: 0 }}>
					<Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate("Camara")}>
						<Image style={styles.camara} source={require("../../assets/camara.png")}></Image>
					</Pressable>
				</View>
				<View style={{ position: "absolute", top: 730, left: 20, right: 0, bottom: 0 }}>
					<Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate("Camera")}>
						<Image style={styles.camara} source={require("../../assets/camara.png")}></Image>
					</Pressable>
				</View>
				<View style={{ position: "absolute", top: 730, left: 324, right: 0, bottom: 0 }}>
					<Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate("Ayuda")}>
						<Image style={styles.camara} source={require("../../assets/help.png")}></Image>
					</Pressable>
				</View>
			</View>
		);
	}
}
/*
 <MapView.MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={AIzaSyAIks4547oo8Dl8_flmn8yICsbKq1Oq3x8} 
          strokeWidth={4}
          strokeColor="#111111"
        />
        */
