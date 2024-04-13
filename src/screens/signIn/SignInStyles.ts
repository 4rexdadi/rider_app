import { COLORS, FONTS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: COLORS.primary,
	},
	formContainer: {
		flex: 1,
		backgroundColor:  COLORS.white,
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	formTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: FONTS.inter700,
	},
	formSubTitle: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 32,
		fontFamily:  FONTS.inter400,
	},
	noAcc: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
		flexWrap: "wrap",
	},
	noAccTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: FONTS.inter700,
		marginRight: 10,
	},
	noAccTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter700,
	},
	forgotPassword: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter700,
		textAlign: "center",
		marginBottom: 40,
	},
});

export default styles;
