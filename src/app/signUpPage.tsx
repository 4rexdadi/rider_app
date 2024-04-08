import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import SignUp from "../screens/signUp/SignUp";

interface signUpPageProps {}

const signUpPage: FC<signUpPageProps> = ({}): JSX.Element => {
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

			<SignUp />
		</SafeAreaView>
	);
};

export default signUpPage;
