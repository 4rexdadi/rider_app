import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import KycAuth from "../screens/kyc/KycAuth";

interface kycPageProps {}

const kycPage: FC<kycPageProps> = ({}): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled: false,
					headerTitle: "",
					headerLeft: () => null,
					headerTitleStyle: {},
					headerBackVisible: false,
				}}
			/>

			<KycAuth />
		</SafeAreaView>
	);
};

export default kycPage;
