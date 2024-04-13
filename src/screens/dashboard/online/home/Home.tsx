import InteractiveMap from "@/src/components/InteractiveMap";
import StreetBar from "@/src/components/StreetBar";
import { router } from "expo-router";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./HomeStyles";

interface HomeProps {}

const Home: FC<HomeProps> = ({}): JSX.Element => {
	const pickupLocation = {
		latitude: 6.615356,
		longitude: 3.323782,
	};

	const dropOffLocation = {
		latitude: 6.597,
		longitude: 3.343,
	};

	const goOffline = () => {
		router.push("/dashboard/(offline)/offlinePage");
	};

	const changeRoute = () => {};

	return (
		<View style={styles.container}>
			<InteractiveMap
				pickupLocation={pickupLocation}
				dropOffLocation={dropOffLocation}
			/>

			<View style={styles.contentContainer}>
				<StreetBar
					distance="44m"
					address="Address Street Rd."
					time="4:32 min"
				/>

				<View style={styles.noOrder}>
					<Text style={styles.noOrderText}>
						NO ORDERS AVAILABLE IN THIS ROUTE
					</Text>
				</View>

				<View style={styles.btnContainer}>
					<TouchableOpacity onPress={() => goOffline()} style={styles.btn2}>
						<Text style={styles.btnText2}>Go offline</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => changeRoute()} style={styles.btn}>
						<Text style={styles.btnText}>Change route</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Home;
