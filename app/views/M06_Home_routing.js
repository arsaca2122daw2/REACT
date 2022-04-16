import React from "react";

import { StyleSheet, Button, Text, View, Image, ImageBackground, Pressable } from "react-native";

const estils = StyleSheet.create({
	contenidor: {
		flex: 1,
		backgroundColor: "#0f0",
	},
	logo: {
		width: 100,
		height: 100,
		padding: 10,
		marginLeft: -250,
		marginTop: 10,
	},
	titol: {
		color: "red",
		fontWeight: "bold",
		fontSize: 50,
		marginTop: -60,
		marginLeft: -50,
	},
	titol2: {
		fontWeight: "bold",
		fontSize: 50,
		marginTop: -65,
		marginLeft: 190,
	},
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	botones: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
	},
	botontitol: { fontSize: 16, lineHeight: 21, fontWeight: "bold", letterSpacing: 0.25, color: "white" },
});

export class M06_Home extends React.Component {
	render() {
		return (
			<ImageBackground source={require("../../assets/Fondo.jpg")} style={estils.background}>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Image style={estils.logo} source={require("../../assets/icon.png")}></Image>
					<Text style={estils.titol}>Fav</Text>
					<Text style={estils.titol2}>Places</Text>
					<View style={{ flex: 1, justifyContent: "center", marginTop: 300, width: 200 }}>
						<Pressable style={estils.botones} onPress={() => this.props.navigation.navigate("Mapes")}>
							<Text style={estils.botontitol}>Mapa</Text>
						</Pressable>
						<View style={{ flex: 1, justifyContent: "center", marginTop: -150 }}>
							<Pressable style={estils.botones} title="Ayuda" onPress={() => this.props.navigation.navigate("Ayuda")}>
								<Text style={estils.botontitol}>Ayuda</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
