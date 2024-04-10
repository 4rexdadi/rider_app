import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
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
	dropDownContainer: {
		borderWidth: 1,
		borderColor: "#D0D5DD",
	},
	dropDown: {
		width: "100%",
		backgroundColor: "white",
		borderWidth: 0,
		fontSize: 16,
		color: "#344054",
		paddingHorizontal: 14,
		paddingVertical: 6,
		fontFamily: "interRegular",
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});

export default styles;
