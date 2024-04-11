import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
		backgroundColor: "#111827",
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "#FCD34D",
		textAlign: "center",
		fontFamily: "interSemiBold",
	},
});
