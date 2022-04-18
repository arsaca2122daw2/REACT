import React, { Component } from "react";
import { StyleSheet, Dimensions, Text, View, Pressable, Image, Alert } from "react-native";
import { Callout } from "react-native-maps";
import Dialog from "react-native-dialog";
import MapView from "react-native-maps";
import * as SQLite from "expo-sqlite";

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
	titulo: {
		fontWeight: "bold",
	},
	description: {
		color: "grey",
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

	state = {
		dialogVisible: false,
		newMarker: {
			longitude: 0,
			latitude: 0,
			title: "",
			description: "",
		},
		arrayMarkers: [],
	};

	showDialog = () => {
		this.setState({ dialogVisible: true });
	};

	handleCancel = () => {
		this.setState({ dialogVisible: false });
	};

	handleSave = () => {
		db = SQLite.openDatabase("db.db");
		db.transaction((tx) => {
			tx.executeSql("create table if not exists marcador (id integer primary key not null, titulo text, descripcion text);");
			db.transaction((tx) => {
				tx.executeSql("insert into marcador (titulo, descripcion) values (?,?)", [this.state.newMarker.title, this.state.newMarker.description]);
				tx.executeSql("select * from marcador", [], (_, { rows }) => console.log(JSON.stringify(rows)));
			});
		});
		this.setState({ dialogVisible: false, arrayMarkers: [...this.state.arrayMarkers, this.state.newMarker] });
	};

	handleClick = (marker) => {
		this.setState({ dialogVisible: true, newMarker: marker.marker });
	};

	handleInputTitleChange = (newTitle) => {
		this.setState({ newMarker: { ...this.state.newMarker, title: newTitle } });
	};

	handleInputDescriptionChange = (newDescription) => {
		this.setState({ newMarker: { ...this.state.newMarker, description: newDescription } });
	};

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
					onPress={(e) => this.handleClick({ marker: e.nativeEvent.coordinate })}
				>
					{this.state.arrayMarkers.map((marker, index) => (
						<MapView.Marker
							key={index}
							coordinate={{
								latitude: marker.latitude || 0,
								longitude: marker.longitude || 0,
							}}
						>
							<Callout onPress={() => this.props.navigation.navigate("Camera")}>
								<Text style={{ width: 30, marginBottom: 7, height: 30 }}>
									<Image style={{ width: 20, height: 20 }} source={require("../../assets/camara.png")}></Image>
								</Text>
								<Text style={styles.titulo}>{marker.title}</Text>
								<Text style={styles.description}>{marker.description}</Text>
							</Callout>
						</MapView.Marker>
					))}

					<MapView.Polyline
						coordinates={this.state.arrayMarkers}
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
					<Dialog.Container visible={this.state.dialogVisible}>
						<Dialog.Title>Añade un nuevo marcador</Dialog.Title>
						<Dialog.Input placeholder="Escribe aquí el título" onChangeText={this.handleInputTitleChange} value={this.state.newMarker.title} />
						<Dialog.Input placeholder="Escribe aquí una descripción" onChangeText={this.handleInputDescriptionChange} value={this.state.newMarker.description} />
						<Dialog.Description>Escribe un título y una descripción para guarlarlo.</Dialog.Description>
						<Dialog.Button label="Cancel" onPress={this.handleCancel} />
						<Dialog.Button label="Guardar" onPress={this.handleSave} />
					</Dialog.Container>
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
