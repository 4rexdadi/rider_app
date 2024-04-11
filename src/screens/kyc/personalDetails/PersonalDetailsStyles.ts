import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		backgroundColor: "#111827",
	},
	formContainer: {
		flex: 1,
		backgroundColor: "#ffffff",
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
		fontFamily: "interBold",
	},
	dropDownLabel: {
		fontSize: 14,
		marginBottom: 6,
		color: "#344054",
		fontFamily: "interSemiBold",
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
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
		fontFamily: "interRegular",
		fontSize: 16,
	},
	itemContainerStyle: {
		borderRadius: 8,
	},
	containerStyle: {
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 8,
	},
});

export default styles;
