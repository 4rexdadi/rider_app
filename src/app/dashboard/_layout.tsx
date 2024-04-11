import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "#fff" },
				contentStyle: { flex: 1 },
				headerShadowVisible: false,
				headerTitle: "",
				headerBackVisible: false,
			}}
		>
			<Stack.Screen options={{}} name="index" />
		</Stack>
	);
};

export default Layout;
