import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import GetEmail from "../screens/forgotPassword/getEmail/GetEmail";

interface forgotPasswordPageProps {}

const forgotPasswordPage: FC<forgotPasswordPageProps> = ({}): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled: false,
					headerTitle: "",
					headerTitleStyle: {},
					headerLeft: () => null,
					headerBackVisible: false,
					contentStyle: {},
				}}
			/>

			<GetEmail />
		</SafeAreaView>
	);
};

export default forgotPasswordPage;
