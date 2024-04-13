import { COLORS, FONTS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: COLORS.white,
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
		fontFamily: FONTS.inter700,
		marginRight: 10,
	},
	resendTitle2: {
		color: "#1F2937",
		fontSize: 16,
		fontFamily: FONTS.inter700,
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
