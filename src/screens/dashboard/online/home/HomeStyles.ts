import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
	},
	contentContainer: {
		padding: 22,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
	},
	noOrder: {
		width: "100%",
		padding: 10,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#111827",
		color: "#F4C430",
		borderRadius: 8,
	},
	btnContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	btn: {
		height: 45,
		paddingHorizontal: 22,
		paddingVertical: 12,
		backgroundColor: "#111827",
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	btn2: {
		height: 45,
		paddingHorizontal: 22,
		paddingVertical: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#111827",
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		fontSize: 15,
		color: "#FCD34D",
		textAlign: "center",
		fontFamily: "interRegular",
	},
	btnText2: {
		fontSize: 15,
		color: "#111827",
		textAlign: "center",
		fontFamily: "interRegular",
	},
});

export default styles;
