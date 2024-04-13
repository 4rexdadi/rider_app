import * as Location from "expo-location";
import { FC, useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { COLORS, FONTS } from "../constants/constant";

interface InteractiveMapProps {
	pickupLocation?: {
		latitude: number;
		longitude: number;
	};
	dropOffLocation?: {
		latitude: number;
		longitude: number;
	};
}

const InteractiveMap: FC<InteractiveMapProps> = ({
	pickupLocation,
	dropOffLocation,
}): JSX.Element => {
	const map = useRef<MapView>(null);
	const [userLocation, setUserLocation] = useState<{
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	}>();

	useEffect(() => {
		const getLocationAsync = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();

			if (status !== "granted") {
				console.log("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});

			setUserLocation({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			});
		};

		getLocationAsync();
	}, []);

	const handlePressPickup = () => {
		// Handle pickup location selection
	};

	const handlePressDropOff = () => {
		// Handle drop-off location selection
	};

	if (Platform.OS === "web") {
		return (
			<View style={styles.noMap}>
				<Text style={styles.noMapText}>
					Map is only available for mobile platforms only
				</Text>
			</View>
		);
	}

	return (
		<MapView
			mapType="mutedStandard"
			provider="google"
			initialRegion={userLocation}
			showsUserLocation
			showsMyLocationButton
			ref={map}
			style={styles.map}
		>
			{userLocation && pickupLocation && dropOffLocation && (
				<>
					<Marker coordinate={userLocation} title="My Location" />

					<Marker
						coordinate={pickupLocation}
						title="Pickup Location"
						onPress={handlePressPickup}
					/>

					<Marker
						coordinate={dropOffLocation}
						title="Drop-off Location"
						onPress={handlePressDropOff}
					/>

					<Polyline
						coordinates={[userLocation, pickupLocation]}
						strokeWidth={5}
						strokeColor="red"
					/>

					<Polyline
						coordinates={[userLocation, dropOffLocation]}
						strokeWidth={5}
						strokeColor="orange"
					/>

					<Polyline
						coordinates={[pickupLocation, dropOffLocation]}
						strokeWidth={5}
						strokeColor="green"
					/>
				</>
			)}
		</MapView>
	);
};

export default InteractiveMap;

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: -1,
	},
	noMap: {
		height: "100%",
		position: "absolute",
		zIndex: 0,
		alignItems: "center",
		justifyContent: "center",
		width: "auto",
		padding: 13,
		backgroundColor: COLORS.primary,
		alignSelf: "center",
		borderRadius: 20,
	},
	noMapText: {
		fontSize: 13,
		color: COLORS.secondary,
		fontFamily: FONTS.inter400,
	},
});
