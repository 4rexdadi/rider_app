import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import BankDetails from "../screens/kyc/bankDetails/BankDetails";

interface bankDetailsPageProps {}

const bankDetailsPage: FC<bankDetailsPageProps> = ({}): JSX.Element => {
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

			<BankDetails />
		</SafeAreaView>
	);
};

export default bankDetailsPage;
