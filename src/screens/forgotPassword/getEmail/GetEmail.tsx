import ForgotPasswordSvg from "@/assets/svg/ForgotPasswordSvg";
import Buttons from "@/src/components/Buttons";
import ForgotPasswordHeader from "@/src/components/ForgotPasswordHeader";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import styles from "./GetEmailStyles";

interface GetEmailProps {}

const GetEmail: FC<GetEmailProps> = ({}): JSX.Element => {
	const [email, setEmail] = useState("");

	const HandleSubmit = () => {
		router.push("/auth/emailConfirmationPage");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ marginTop: 0, marginBottom: 32, width: 32 }}
				onPress={() => router.back()}
			>
				<Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
					<Path
						d="M20.8846 24L22.5 22.6667L13.9615 16L22.5 9.33333L20.8846 8L10.5 16L20.8846 24Z"
						fill="black"
					/>
				</Svg>
			</TouchableOpacity>

			<ForgotPasswordHeader
				Icon={ForgotPasswordSvg}
				title="Forgot password?"
				subTitle="No worries, we’ll send you reset instructions."
			/>

			<View style={{ marginBottom: 32 }} />

			<Input
				label="Email"
				placeholder="Enter your email"
				value={email}
				onChangeText={(text) => setEmail(text)}
				placeholderTextColor="#667085"
				autoComplete="email"
				keyboardType="email-address"
			/>

			<Buttons
				onPress={() => HandleSubmit()}
				marginTop={32}
				marginBottom={24}
				title="Reset password"
			/>

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

export default GetEmail;
