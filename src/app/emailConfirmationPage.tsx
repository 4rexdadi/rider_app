import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import EmailConfirmation from "../screens/forgotPassword/emailConfirmation/EmailConfirmation";

interface emailConfirmationPageProps {}

const emailConfirmationPage: FC<
	emailConfirmationPageProps
> = ({}): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#FFFFFF" },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled: false,
					headerTitle: "",
					headerTitleStyle: {},
					headerLeft: () => null,
					headerBackVisible: false,
					contentStyle: {},
				}}
			/>

			<EmailConfirmation />
		</SafeAreaView>
	);
};

export default emailConfirmationPage;
