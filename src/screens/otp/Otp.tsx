import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import { router } from "expo-router";
import { FC, useState } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./OtpStyles";

interface OtpProps {}

const Otp: FC<OtpProps> = ({}): JSX.Element => {
	const [otp, setOTP] = useState("");
	const userEmail = "ayomideda32.com";

	const handleOTPChange = (text: string) => {
		const filteredText = text.replace(/[^0-9]/g, "");
		setOTP(filteredText);
	};

	const HandleOTPSubmit = () => {
		router.push("/auth/signInPage");
	};

	return (
		<View style={styles.container}>
			<Header headerTitle="OTP Verification" showBackBtn />

			<ScrollView style={styles.verifyContainer}>
				<Text style={styles.verifyTitle}>Check your email</Text>

				<Text style={styles.verifySubTitle}>
					We sent a 6-digit code to {userEmail}
				</Text>

				<View style={styles.inputContainer}>
					{[...Array(6)].map((_, index) => (
						<TextInput
							key={index}
							style={styles.input}
							keyboardType="numeric"
							maxLength={1}
							value={otp[index] || ""}
							onChangeText={(text) => {
								const newOTP = [...otp];
								newOTP[index] = text;
								setOTP(newOTP.join(""));
							}}
						/>
					))}
				</View>

				<Buttons
					onPress={() => HandleOTPSubmit()}
					marginTop={0}
					marginBottom={32}
					title="Verify email"
				/>

				<View style={styles.notReceived}>
					<Text style={styles.notReceivedTitle1}>
						Didn’t receive the email?
					</Text>
					<TouchableOpacity>
						<Text style={styles.notReceivedTitle2}>Click to resend</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default Otp;
