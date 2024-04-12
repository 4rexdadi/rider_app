import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "#fff" },
				contentStyle: { flex: 1 },
				headerShadowVisible: false,
				headerTitle: "",
				headerLeft: () => null,
			}}
		>
			<Stack.Screen options={{}} name="index" />
			<Stack.Screen options={{ header: () => null }} name="(online)" />
		</Stack>
	);
};

export default Layout;
