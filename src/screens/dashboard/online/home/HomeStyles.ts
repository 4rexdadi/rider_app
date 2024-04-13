import { COLORS, FONTS } from "@/src/constants/constant";
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
		width: "auto",
		padding: 13,
		backgroundColor: COLORS.primary,
		alignSelf: "center",
		borderRadius: 20,
	},
	noOrderText: {
		fontSize: 13,
		color: COLORS.secondary,
		fontFamily: FONTS.inter400,
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
		backgroundColor: COLORS.primary,
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
		borderColor: COLORS.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		fontSize: 15,
		color: "#FCD34D",
		textAlign: "center",
		fontFamily: FONTS.inter400,
	},
	btnText2: {
		fontSize: 15,
		color: COLORS.primary,
		textAlign: "center",
		fontFamily: FONTS.inter400,
	},
});

export default styles;
