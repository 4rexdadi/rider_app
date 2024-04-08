import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#111827",
	},
	verifyContainer: {
		flex: 1,
		backgroundColor: "#ffffff",
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	verifyTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: "interBold",
	},
	verifySubTitle: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 32,
		fontFamily: "interRegular",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		marginBottom: 64,
	},
	input: {
		borderWidth: 1,
		borderColor: "#D1D5DB",
		borderRadius: 5,
		padding: 6,
		textAlign: "center",
		fontSize: 34,
		marginRight: 6,
		color: "#374151",
		fontFamily: "interBold",
		width: 45,
		height: 45,
	},
	notReceived: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	notReceivedTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: "interBold",
		marginRight: 10,
	},
	notReceivedTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: "interBold",
	},
});

export default styles;
