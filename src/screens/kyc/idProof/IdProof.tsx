import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./IdProofStyles";

interface IdProofProps {}

const IdProof: FC<IdProofProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>IdProof</Text>
		</View>
	);
};

export default IdProof;
