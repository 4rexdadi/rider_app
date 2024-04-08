import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";

interface InputProps extends TextInputProps {
	label: string;
	error?: string;
}

export default function Input({ label, error, ...inputProps }: InputProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<TextInput style={styles.input} {...inputProps} />

			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
	},
	label: {
		fontSize: 14,
		marginBottom: 6,
		color: "#344054",
		fontFamily: "interSemiBold",
	},
	input: {
		width: "100%",
		borderWidth: 1,
		fontSize: 16,
		color: "#344054",
		borderColor: "#D0D5DD",
		paddingHorizontal: 14,
		paddingVertical: 6,
		fontFamily: "interRegular",
	},
	error: {
		fontSize: 14,
		color: "#667085",
		fontFamily: "interRegular",
		marginTop: 6,
	},
});
