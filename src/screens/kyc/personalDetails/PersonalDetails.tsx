import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./PersonalDetailsStyles";

interface PersonalDetailsProps {}

const PersonalDetails: FC<PersonalDetailsProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>PersonalDetails</Text>
		</View>
	);
};

export default PersonalDetails;
