import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#111827",
	},
	formContainer: {
		flex: 1,
		backgroundColor: "#ffffff",
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	formTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: "interBold",
	},
	formSubTitle: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 32,
		fontFamily: "interRegular",
	},
	noAcc: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
	},
	noAccTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: "interBold",
		marginRight: 10,
	},
	noAccTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: "interBold",
	},
	forgotPassword: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: "interBold",
		textAlign: "center",
	},
});

export default styles;
