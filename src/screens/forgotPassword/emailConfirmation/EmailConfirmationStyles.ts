import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: "white",
	},
	title: {},
	resend: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 32,
		flexWrap: "wrap",
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
