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
		flexDirection: "column",
		// justifyContent: "space-between",
	},
	formTitle: {
		fontSize: 24,
		color: "#101828",
		marginBottom: 8,
		fontFamily: "interBold",
	},
});

export default styles;
