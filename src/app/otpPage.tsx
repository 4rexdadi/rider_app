import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import Otp from "../screens/otp/Otp";

interface otpPageProps {}

const otpPage: FC<otpPageProps> = ({}): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#111827" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#111827" },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled: false,
					headerTitle: "",
					headerTitleStyle: {},
					headerBackVisible: false,
				}}
			/>

			<Otp />
		</SafeAreaView>
	);
};

export default otpPage;
