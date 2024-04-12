import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./WalletStyles";

interface WalletProps {}

const Wallet: FC<WalletProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Wallet</Text>
		</View>
	);
};

export default Wallet;
