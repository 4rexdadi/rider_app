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
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.white },
				}}
				name="index"
			/>

			<Stack.Screen options={{}} name="personalDetailsPage" />

			<Stack.Screen options={{}} name="bankDetailsPage" />

			<Stack.Screen options={{}} name="idProofPage" />

			<Stack.Screen
				options={{ headerStyle: { backgroundColor: COLORS.white } }}
				name="kycConfirmationPage"
			/>
		</Stack>
	);
};

export default Layout;
