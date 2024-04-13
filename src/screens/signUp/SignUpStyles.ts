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
		backgroundColor: COLORS.white,
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	formTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 16,
		fontFamily: FONTS.inter700,
	},
	googleAuthBtn: {
		padding: 12,
		borderWidth: 1,
		borderColor: "#D0D5DD",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
		height: 50,
		borderRadius: 8,
	},
	googleAuthBtnSvg: {
		height: 24,
		width: 24,
		marginRight: 12,
	},
	googleAuthBtnText: {
		color: "#344054",
		fontSize: 16,
		fontFamily: FONTS.inter600,
	},
	haveAnAcc: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		marginBottom: 60,
	},
	haveAnAccTitle1: {
		color: "#4B5563",
		fontSize: 16,
		fontFamily: FONTS.inter700,
		marginRight: 10,
	},
	haveAnAccTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter700,
	},
});

export default styles;
