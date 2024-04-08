import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./CreateNewPasswordStyles";

interface CreateNewPasswordProps {}

const CreateNewPassword: FC<CreateNewPasswordProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>CreateNewPassword</Text>
		</View>
	);
};

export default CreateNewPassword;
