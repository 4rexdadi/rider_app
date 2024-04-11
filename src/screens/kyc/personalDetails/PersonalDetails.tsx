import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./PersonalDetailsStyles";

interface PersonalDetailsProps {}

const PersonalDetails: FC<PersonalDetailsProps> = ({}): JSX.Element => {
	const [inputs, setInputs] = useState({
		workMode: "",
		shiftType: "",
		fullName: "",
		phoneNumber: "",
	});

	const shiftType = [
		{ label: "Place holder", value: "Place holder" },
		{ label: "Ignore", value: "Ignore" },
	];

	const workMode = [
		{ label: "Place holder", value: "Place holder" },
		{ label: "Ignore", value: "Ignore" },
	];

	const HandleChange = (name: string, value: string) => {
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const HandleSubmit = () => {
		router.push("/kyc/idProofPage");
	};

	return (
		<View style={styles.container}>
			<Header
				headerTitle="Upload KYC"
				showBackBtn
				activeDocTab="Personal Details"
			/>

			<ScrollView style={styles.formContainer}>
				<Text style={styles.formTitle}>Enter your details</Text>

				<View style={{ marginVertical: 8 }}>
					<Text style={styles.dropDownLabel}>Work mode</Text>
					<Dropdown
						style={[styles.dropdown]}
						placeholderStyle={styles.placeholderStyle}
						selectedTextStyle={styles.selectedTextStyle}
						itemContainerStyle={styles.itemContainerStyle}
						containerStyle={styles.containerStyle}
						data={workMode}
						maxHeight={300}
						labelField="label"
						valueField="value"
						placeholder="Choose work mode"
						value={inputs.workMode}
						onChange={(item) => {
							HandleChange("workMode", item.value);
						}}
					/>
				</View>

				<View style={{ marginVertical: 8 }}>
					<Text style={styles.dropDownLabel}>Shift type</Text>
					<Dropdown
						style={[styles.dropdown]}
						placeholderStyle={styles.placeholderStyle}
						selectedTextStyle={styles.selectedTextStyle}
						data={shiftType}
						maxHeight={300}
						labelField="label"
						valueField="value"
						placeholder="Choose shift types"
						value={inputs.shiftType}
						onChange={(item) => {
							HandleChange("shiftType", item.value);
						}}
					/>
				</View>

				<Input
					label="Next of Kin / Guarantor"
					placeholder="Enter full name"
					value={inputs.fullName}
					onChangeText={(text) => HandleChange("fullName", text)}
					placeholderTextColor="#667085"
					autoComplete="name"
				/>

				<Input
					label="Guarantor’s phone number"
					placeholder="Enter phone number"
					value={inputs.phoneNumber}
					onChangeText={(text) => HandleChange("phoneNumber", text)}
					placeholderTextColor="#667085"
					autoComplete="tel"
					keyboardType="phone-pad"
				/>

				<Buttons
					onPress={() => HandleSubmit()}
					marginTop={146}
					marginBottom={60}
					title="Next"
				/>
			</ScrollView>
		</View>
	);
};

export default PersonalDetails;
