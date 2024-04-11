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
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
				}}
				name="index"
			/>

			<Stack.Screen options={{}} name="personalDetailsPage" />

			<Stack.Screen options={{}} name="bankDetailsPage" />

			<Stack.Screen options={{}} name="idProofPage" />

			<Stack.Screen
				options={{ headerStyle: { backgroundColor: "#FFFFFF" } }}
				name="kycConfirmationPage"
			/>
		</Stack>
	);
};

export default Layout;
