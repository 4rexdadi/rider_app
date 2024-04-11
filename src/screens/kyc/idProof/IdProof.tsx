import { CameraSvg, UploadSvg } from "@/assets/svg/UploadSvg";
import Buttons from "@/src/components/Buttons";
import Header from "@/src/components/Header";
import Input from "@/src/components/Input";
import { router } from "expo-router";
import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./IdProofStyles";

interface IdProofProps {}

const Upload = () => {
	return (
		<View style={styles.upload}>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CameraSvg />

				<Text style={styles.uploadText}>Camera</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<UploadSvg />

				<Text style={styles.uploadText}>Upload</Text>
			</TouchableOpacity>
		</View>
	);
};

const IdProof: FC<IdProofProps> = ({}): JSX.Element => {
	const [inputs, setInputs] = useState({
		fullName: "",
		PlateNumber: "",
		documentType: "",
	});

	const docs = [
		"Drivers license",
		"National ID Card",
		"International passport",
	];

	const HandleChange = (name: string, value: string) => {
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const HandleSubmit = () => {
		router.push("/kyc/bankDetailsPage");
	};

	return (
		<View style={styles.container}>
			<Header headerTitle="Upload KYC" showBackBtn activeDocTab="ID Proof" />

			<ScrollView style={styles.formContainer}>
				<Text style={styles.formTitle}>Upload profile picture</Text>

				<Text style={styles.formSubTitle}>
					Make sure that your picture is clear and visible
				</Text>

				<Upload />

				<Text style={styles.formTitle2}>Choose Document type</Text>

				<Text style={styles.formSubTitle}>
					Ensure that your documents are not blurry
				</Text>

				<View style={styles.docContainer}>
					{docs.map((doc, i) => (
						<TouchableOpacity
							onPress={() => HandleChange("documentType", doc)}
							key={i}
							style={{
								backgroundColor:
									inputs.documentType === doc ? "#F3F4F6" : "#fffff",
								...styles.doc,
							}}
						>
							<Text style={styles.docText}>{doc}</Text>
						</TouchableOpacity>
					))}
				</View>

				<Upload />

				<View style={{ marginBottom: 32 }} />

				<Input
					label="Vehicle Make"
					placeholder="Enter full name"
					value={inputs.fullName}
					onChangeText={(text) => HandleChange("fullName", text)}
					placeholderTextColor="#667085"
					autoComplete="name"
				/>

				<Input
					label="Vehicle Plate Number"
					placeholder="Enter number"
					value={inputs.PlateNumber}
					onChangeText={(text) => HandleChange("PlateNumber", text)}
					placeholderTextColor="#667085"
				/>

				<Buttons
					onPress={() => HandleSubmit()}
					marginTop={36}
					marginBottom={24}
					title="Next"
				/>
			</ScrollView>
		</View>
	);
};

export default IdProof;
