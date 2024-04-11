import EmailConfirmSvg from "@/assets/svg/EmailConfirmSvg";
import Buttons from "@/src/components/Buttons";
import ForgotPasswordHeader from "@/src/components/ForgotPasswordHeader";
import { router } from "expo-router";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import styles from "./EmailConfirmationStyles";

interface EmailConfirmationProps {}

const EmailConfirmation: FC<EmailConfirmationProps> = ({}): JSX.Element => {
	const user = "ayomidedahunsi2.com";

	const openEmailApp = () => {};

	return (
		<View style={styles.container}>
			<ForgotPasswordHeader
				Icon={EmailConfirmSvg}
				title="Check your email"
				subTitle={`We sent a verification link to ${user}`}
			/>

			<Buttons
				onPress={() => openEmailApp()}
				marginTop={32}
				marginBottom={32}
				title="Open email app"
			/>

			<View style={styles.resend}>
				<Text style={styles.resendTitle1}>Didn’t receive the email?</Text>

				<TouchableOpacity onPress={() => router.back()}>
					<Text style={styles.resendTitle2}>Click to resend</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				style={styles.goBack}
				onPress={() => router.push("/auth/signInPage")}
			>
				<Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<Path
						d="M15.8327 10H4.16602M4.16602 10L9.99935 15.8334M4.16602 10L9.99935 4.16669"
						stroke="#1F2937"
						stroke-width="1.67"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</Svg>

				<Text style={styles.back}>Back to log in</Text>
			</TouchableOpacity>
		</View>
	);
};

export default EmailConfirmation;
