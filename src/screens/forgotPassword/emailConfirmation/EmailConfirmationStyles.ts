import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 16,
	},
	title: {},
	resend: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 32,
	},
	resendTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: "interBold",
		marginRight: 10,
	},
	resendTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: "interBold",
	},
	goBack: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	back: {
		marginLeft: 8,
	},
});

export default styles;
