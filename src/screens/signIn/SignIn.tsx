import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignInStyles";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}): JSX.Element => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const HandleChange = (name: string, value: string) => {
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const HandleSubmit = () => {
		const hasDoneKYC = false;

		if (hasDoneKYC) router.push("./onlinePage");
		else router.push("./kycPage");
	};

	return (
		<View style={styles.container}>
			<Header headerTitle="Sign in" showBackBtn />

			<ScrollView style={styles.formContainer}>
				<Text style={styles.formTitle}>Welcome back!</Text>

				<Text style={styles.formSubTitle}>
					Deliver delicacies, earn on the go!
				</Text>

				<Input
					label="Email"
					placeholder="Enter your email"
					value={inputs.email}
					onChangeText={(text) => HandleChange("email", text)}
					placeholderTextColor="#667085"
					autoComplete="email"
					keyboardType="email-address"
				/>

				<Input
					label="Password"
					placeholder="Enter your password"
					value={inputs.password}
					onChangeText={(text) => HandleChange("password", text)}
					placeholderTextColor="#667085"
					autoComplete="password"
					secureTextEntry
				/>

				<Buttons
					onPress={() => HandleSubmit()}
					marginTop={56}
					marginBottom={24}
					title="Sign in"
				/>

				<View style={styles.noAcc}>
					<Text style={styles.noAccTitle1}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => router.push("./signUpPage")}>
						<Text style={styles.noAccTitle2}>Sign up</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity onPress={() => router.push("./forgotPasswordPage")}>
					<Text style={styles.forgotPassword}>Forgot password</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default SignIn;
