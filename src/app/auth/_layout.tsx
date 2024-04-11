import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "#111827" },
				contentStyle: { flex: 1 },
				headerShadowVisible: false,
				headerBackButtonMenuEnabled: false,
				headerTitle: "",
				headerLeft: () => null,
				headerTitleStyle: {},
				headerBackVisible: false,
			}}
		>
			<Stack.Screen options={{}} name="index" />

			<Stack.Screen options={{}} name="signInPage" />

			<Stack.Screen options={{}} name="otpPage" />

			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
				}}
				name="forgotPasswordPage"
			/>

			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
				}}
				name="emailConfirmationPage"
			/>
		</Stack>
	);
};

export default Layout;
