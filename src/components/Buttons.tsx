import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants/constant";

interface ButtonsProps {
	title: string;
	marginTop?: number;
	marginBottom?: number;
	onPress: () => void;
}

export default function Buttons({
	title,
	onPress,
	marginTop,
	marginBottom,
}: ButtonsProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				marginTop: marginTop,
				marginBottom: marginBottom,
				...styles.buttonContainer,
			}}
		>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 50,
		paddingHorizontal: 22,
		paddingVertical: 12,
		backgroundColor: COLORS.primary,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 16,
		color: COLORS.secondary,
		textAlign: "center",
		fontFamily: FONTS.inter600,
	},
});
