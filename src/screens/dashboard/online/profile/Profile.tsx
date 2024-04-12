import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./ProfileStyles";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profile</Text>
		</View>
	);
};

export default Profile;
