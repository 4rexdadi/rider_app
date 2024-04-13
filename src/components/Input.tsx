import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import { COLORS, FONTS } from "../constants/constant";

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
		fontFamily: FONTS.inter600,
	},
	input: {
		height: 50,
		borderColor: COLORS.gray,
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 14,
		paddingVertical: 6,
		color: "#344054",
		fontSize: 16,
		fontFamily: FONTS.inter400,
	},
	error: {
		fontSize: 14,
		color: "#667085",
		fontFamily: FONTS.inter400,
		marginTop: 6,
	},
});
