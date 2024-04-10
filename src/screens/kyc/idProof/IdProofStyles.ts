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
		marginBottom: 8,
		fontFamily: "interBold",
	},
	formTitle2: {
		fontSize: 16,
		color: "#101828",
		marginBottom: 8,
		marginTop: 32,
		fontFamily: "interBold",
	},
	formSubTitle: {
		fontSize: 14,
		color: "#6B7280",
		marginBottom: 16,
		fontFamily: "interRegular",
	},
	upload: {
		padding: 12,
		backgroundColor: "#F3F4F6",
		alignContent: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	uploadText: {
		fontSize: 14,
		color: "#6B7280",
		fontFamily: "interSemiBold",
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
		borderColor: "Shadow/xs",
		borderWidth: 1,
	},
	docText: {
		textAlign: "center",
		fontSize: 14,
		color: "#667085",
		fontFamily: "interSemiBold",
	},
});

export default styles;
