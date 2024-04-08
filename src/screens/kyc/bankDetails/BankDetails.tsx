import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./BankDetailsStyles";

interface BankDetailsProps {}

const BankDetails: FC<BankDetailsProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>BankDetails</Text>
		</View>
	);
};

export default BankDetails;
