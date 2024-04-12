import StreetBar from "@/src/components/StreetBar";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./HomeStyles";

interface HomeProps {}

const Home: FC<HomeProps> = ({}): JSX.Element => {
	const HandleSubmit = () => {};

	return (
		<View style={styles.container}>
			{/* Map feature goes here => Todo */}

			<View style={styles.contentContainer}>
				<StreetBar
					distance="44m"
					address="Address Street Rd."
					time="4:32 min"
				/>

				<Text style={styles.noOrder}>NO ORDERS AVAILABLE IN THIS ROUTE</Text>

				<View style={styles.btnContainer}>
					<TouchableOpacity onPress={() => HandleSubmit()} style={styles.btn2}>
						<Text style={styles.btnText2}>Go offline</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => HandleSubmit()} style={styles.btn}>
						<Text style={styles.btnText}>Change route</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Home;