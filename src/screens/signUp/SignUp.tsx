import GoogleSvg from "@/assets/svg/GoogleSvg";
import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignUpStyles";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}): JSX.Element => {
	const [inputs, setInputs] = useState({
		surname: "",
		firstName: "",
		phoneNumber: "",
		email: "",
		password: "",
	});

	const HandleChange = (name: string, value: string) => {
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const HandleSubmit = () => {
		router.push("./otpPage");
	};

	const googleAuth = () => {};

	return (
		<View style={styles.container}>
			<Header headerTitle="Sign up" />

			<ScrollView style={styles.formContainer}>
				<Text style={styles.formTitle}>Welcome!</Text>

				<Input
					label="Surname"
					placeholder="Enter your name"
					value={inputs.surname}
					onChangeText={(text) => HandleChange("surname", text)}
					placeholderTextColor="#667085"
					autoComplete="name-family"
				/>

				<Input
					label="First name"
					placeholder="Enter your first name"
					value={inputs.firstName}
					onChangeText={(text) => HandleChange("firstName", text)}
					placeholderTextColor="#667085"
					autoComplete="name"
				/>

				<Input
					label="Email*"
					placeholder="Enter your email"
					value={inputs.email}
					onChangeText={(text) => HandleChange("email", text)}
					placeholderTextColor="#667085"
					autoComplete="email"
					keyboardType="email-address"
				/>

				<Input
					label="Phone Number"
					placeholder="Enter your phone number"
					value={inputs.phoneNumber}
					onChangeText={(text) => HandleChange("phoneNumber", text)}
					placeholderTextColor="#667085"
					autoComplete="tel"
					keyboardType="phone-pad"
				/>

				<Input
					label="Password*"
					placeholder="Create a password"
					value={inputs.password}
					onChangeText={(text) => HandleChange("password", text)}
					placeholderTextColor="#667085"
					autoComplete="password"
					error={
						inputs.password.length < 8 ? "Must be at least 8 characters." : ""
					}
					secureTextEntry
				/>

				<Buttons
					onPress={() => HandleSubmit()}
					marginTop={16}
					marginBottom={16}
					title="Create account"
				/>

				<TouchableOpacity
					style={styles.googleAuthBtn}
					onPress={() => googleAuth()}
				>
					<GoogleSvg styles={styles.googleAuthBtnSvg} />

					<Text style={styles.googleAuthBtnText}>Sign up with Google</Text>
				</TouchableOpacity>

				<View style={styles.haveAnAcc}>
					<Text style={styles.haveAnAccTitle1}>Already have an account?</Text>
					<TouchableOpacity onPress={() => router.push("./signInPage")}>
						<Text style={styles.haveAnAccTitle2}>Sign in</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default SignUp;
