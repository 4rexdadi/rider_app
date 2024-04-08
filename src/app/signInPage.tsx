import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import SignIn from "../screens/signIn/SignIn";

interface signInPageProps {}

const signInPage: FC<signInPageProps> = ({}): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#111827" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#111827" },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled: false,
					headerTitle: "",
					headerLeft: () => null,
					headerTitleStyle: {},
					headerBackVisible: false,
				}}
			/>

			<SignIn />
		</SafeAreaView>
	);
};

export default signInPage;
