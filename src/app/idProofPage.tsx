import { Stack } from "expo-router";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import IdProof from "../screens/kyc/idProof/IdProof";

interface idProofPageProps {}

const idProofPage: FC<idProofPageProps> = ({}): JSX.Element => {
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

			<IdProof />
		</SafeAreaView>
	);
};

export default idProofPage;
