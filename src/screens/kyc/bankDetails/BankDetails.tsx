import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./BankDetailsStyles";

interface BankDetailsProps {}

const BankDetails: FC<BankDetailsProps> = ({}): JSX.Element => {
	const [inputs, setInputs] = useState({
		fullName: "",
		accNumber: "",
		bankName: "",
	});

	const HandleChange = (name: string, value: string) => {
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const HandleSubmit = () => {
		router.push("/kyc/kycConfirmationPage");
	};

	return (
		<View style={styles.container}>
			<Header
				headerTitle="Upload KYC"
				showBackBtn
				activeDocTab="Bank Details"
			/>

			<ScrollView style={styles.formContainer}>
				<View>
					<Text style={styles.formTitle}>Enter account details</Text>

					<Input
						label="VName on account"
						placeholder="Enter full name"
						value={inputs.fullName}
						onChangeText={(text) => HandleChange("fullName", text)}
						placeholderTextColor="#667085"
						autoComplete="name"
					/>

					<Input
						label="Account number"
						placeholder="Enter account number"
						value={inputs.accNumber}
						onChangeText={(text) => HandleChange("accNumber", text)}
						placeholderTextColor="#667085"
						keyboardType="number-pad"
					/>

					<Input
						label="Name of Bank"
						placeholder="Enter bank name"
						value={inputs.bankName}
						onChangeText={(text) => HandleChange("bankName", text)}
						placeholderTextColor="#667085"
					/>
				</View>

				<Buttons
					onPress={() => HandleSubmit()}
					marginTop={146}
					marginBottom={34}
					title="Submit"
				/>
			</ScrollView>
		</View>
	);
};

export default BankDetails;
