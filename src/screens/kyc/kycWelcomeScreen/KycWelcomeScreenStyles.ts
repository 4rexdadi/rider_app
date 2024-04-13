import { COLORS, FONTS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 24,
		backgroundColor: COLORS.white,
	},
	title: {
		color: "#101828",
		fontSize: 24,
		fontFamily: FONTS.inter800,
	},
	subTitle: {
		color: "#6B7280",
		fontSize: 14,
		fontFamily: FONTS.inter400,
		marginTop: 12,
		marginBottom: 5,
	},
	kycSvg: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 24,
	},
	ruleContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: 16,
	},
	ruleDot: {
		width: 5,
		height: 5,
		backgroundColor: "#1F2937",
		marginRight: 8,
		borderRadius: 5,
	},
	ruleText: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter600,
	},
});

export default styles;
