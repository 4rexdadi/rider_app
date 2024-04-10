import KycSvg from "@/assets/svg/KycSvg";
import Buttons from "@/src/components/Buttons";
import { router } from "expo-router";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./KycAuthStyles";

interface KycAuthProps {}

const KycAuth: FC<KycAuthProps> = ({}): JSX.Element => {
	const rules = [
		"Smart phone",
		"Valid ID",
		"Drivers/ Riders license",
		"Vehicle/Motorcycle Details",
		"Guarantor",
		"At least one year experience in riding",
	];

	const proceed = () => {
		router.push("./personalDetailsPage");
	};

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>KYC / Authentication</Text>
			<Text style={styles.subTitle}>
				We kindly request you have/provide us with the following to proceed with
				your admin approval.
			</Text>
			<View style={styles.kycSvg}>
				<KycSvg styles={{}} />
			</View>
			{rules.map((rule, i) => (
				<View key={i} style={styles.ruleContainer}>
					<View style={styles.ruleDot} />

					<Text style={styles.ruleText}>{rule}</Text>
				</View>
			))}

			<Buttons
				onPress={() => proceed()}
				marginTop={16}
				marginBottom={50}
				title="Proceed"
			/>
		</ScrollView>
	);
};

export default KycAuth;
