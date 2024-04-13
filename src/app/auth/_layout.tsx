import { COLORS } from "@/src/constants/constant";
import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.primary },
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
					headerStyle: { backgroundColor: COLORS.white },
				}}
				name="forgotPasswordPage"
			/>

			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.white },
				}}
				name="emailConfirmationPage"
			/>
		</Stack>
	);
};

export default Layout;
