import { COLORS, FONTS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: COLORS.primary,
	},
	verifyContainer: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	verifyTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: FONTS.inter700,
	},
	verifySubTitle: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 32,
		fontFamily: FONTS.inter400,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 64,
		gap: 6,
	},
	input: {
		borderWidth: 1,
		borderColor: "#D1D5DB",
		borderRadius: 5,
		padding: 6,
		textAlign: "center",
		fontSize: 34,
		color: "#374151",
		fontFamily: FONTS.inter700,
		width: 45,
		height: 45,
	},
	notReceived: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
	},
	notReceivedTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: FONTS.inter700,
		marginRight: 10,
	},
	notReceivedTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter700,
	},
});

export default styles;
