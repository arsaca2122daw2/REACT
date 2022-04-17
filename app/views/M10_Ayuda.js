import React from "react";
import { StyleSheet, Button, Text, View, Image, ImageBackground, Pressable } from "react-native";

const estils = StyleSheet.create({
	contenidor: {
		flex: 1,
		backgroundColor: "#0f0",
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
	tayuda: {
		fontWeight: "bold",
		fontSize: 40,
		marginTop: -60,
	},
	titulos: {
		fontWeight: "bold",
		left: 20,
		fontSize: 20,
		marginBottom: 10,
		marginTop: 10,
	},
	texto: {
		padding: 10,
	},
});

export class M10_Ayuda extends React.Component {
	render() {
		return (
			<View style={{ top: -100, flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Image style={{ width: 60, height: 60, padding: 10, marginLeft: -250 }} source={require("../../assets/help2.png")}></Image>
				<Text style={estils.tayuda}>Ayuda</Text>

				<View style={{ top: 50 }}>
					<Text style={estils.titulos}>¿Como añadir un marcador?</Text>
					<Text style={estils.texto}>Añadir un marcador al mapa es muy sencillo, solo deberás clickar en cualquier parte de la pantalla y se añadirá un punto rojo.</Text>
					<Text style={estils.titulos}>¿Como hacer una foto?</Text>
					<Text style={estils.texto}>Para añadir un marcador deberás fijarte abajo a la izquierda donde verás un botón con el simbolo de una camara. Al hacer click te redirijirá a la camara</Text>
					<Text style={estils.titulos}>¿Donde se guarda?</Text>
					<Text style={estils.texto}>Todo esto se guarda en Sqlite. Tus marcadores guardados por ahora son: </Text>
				</View>
			</View>
		);
	}
}
