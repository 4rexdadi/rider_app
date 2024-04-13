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
		marginBottom: 24,
		fontFamily: FONTS.inter700,
	},
	dropDownLabel: {
		fontSize: 14,
		marginBottom: 6,
		color: "#344054",
		fontFamily: FONTS.inter600,
	},
	dropdown: {
		height: 50,
		borderColor: COLORS.gray,
		// borderColor: "#D0D5DD",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 14,
		paddingVertical: 6,
	},
	placeholderStyle: {
		fontSize: 16,
		color: "#667085",
	},
	selectedTextStyle: {
		color: "#344054",
		fontFamily: FONTS.inter400,
		fontSize: 16,
	},
	itemContainerStyle: {
		borderRadius: 8,
	},
	containerStyle: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		borderRadius: 8,
	},
});

export default styles;
