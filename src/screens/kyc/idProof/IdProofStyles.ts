import { COLORS, FONTS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		backgroundColor: COLORS.primary,
	},
	formContainer: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingHorizontal: 24,
		paddingVertical: 20,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		marginTop: 40,
	},
	formTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: FONTS.inter700,
	},
	formTitle2: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 8,
		marginTop: 32,
		fontFamily: FONTS.inter700,
	},
	formSubTitle: {
		fontSize: 14,
		color: "#6B7280",
		marginBottom: 16,
		fontFamily: FONTS.inter400,
	},
	upload: {
		padding: 25,
		borderRadius: 15,
		backgroundColor: "#F3F4F6",
		alignContent: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		// gap: 78,
	},
	uploadText: {
		fontSize: 14,
		color: "#6B7280",
		fontFamily: FONTS.inter600,
		marginTop: 5,
	},
	docContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 16,
		rowGap: 10,
		columnGap: 16,
	},
	doc: {
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderColor: COLORS.gray,
		borderWidth: 1,
	},
	docText: {
		textAlign: "center",
		fontSize: 14,
		color: "#667085",
		fontFamily: FONTS.inter600,
	},
});

export default styles;
