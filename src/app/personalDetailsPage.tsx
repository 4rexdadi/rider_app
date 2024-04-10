import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import PersonalDetails from "../screens/kyc/personalDetails/PersonalDetails";

interface personalDetailsPageProps {}

const personalDetailsPage: FC<personalDetailsPageProps> = ({}): JSX.Element => {
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

			<PersonalDetails />
		</SafeAreaView>
	);
};

export default personalDetailsPage;
