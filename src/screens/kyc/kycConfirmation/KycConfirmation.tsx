import KycConfirmSvg from "@/assets/svg/KycConfirmSvg";
import Buttons from "@/src/components/Buttons";
import ForgotPasswordHeader from "@/src/components/ForgotPasswordHeader";
import { router } from "expo-router";
import { FC } from "react";
import { View } from "react-native";
import styles from "./KycConfirmationStyles";

interface KycConfirmationProps {}

const KycConfirmation: FC<KycConfirmationProps> = ({}): JSX.Element => {
	const goToAccount = () => {
		router.push("/dashboard/");
	};

	return (
		<View style={styles.container}>
			<View style={{ justifyContent: "flex-end", flex: 1 }}>
				<ForgotPasswordHeader
					Icon={KycConfirmSvg}
					title="Your details have been submitted"
					subTitle="We will send you an email to confirm your status updates"
				/>
			</View>

			<View style={{ justifyContent: "flex-end", flex: 1 }}>
				<Buttons
					onPress={() => goToAccount()}
					marginTop={36}
					marginBottom={24}
					title="View Account"
				/>
			</View>
		</View>
	);
};

export default KycConfirmation;
