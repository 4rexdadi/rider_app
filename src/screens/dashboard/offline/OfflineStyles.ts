import { COLORS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
	},
	header: {
		width: "100%",
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: COLORS.white,
		paddingHorizontal: 25,
		paddingVertical: 8,
	},
	userImage: {
		width: 50,
		height: 50,
		borderColor: "#CFCFCF",
		borderWidth: 1,
		borderRadius: 50,
	},
	backgroundImg: {
		flex: 1,
		position: "absolute",
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		opacity: 0.3,
		zIndex: -1,
	},
	content: {
		flex: 1,
		flexDirection: "column",
		// alignItems: "center",
		justifyContent: "flex-end",
		paddingHorizontal: 24,
		gap: 24,
	},
	starts: {
		paddingHorizontal: 16,
		paddingVertical: 23,
		backgroundColor: COLORS.white,
	},
	title: {
		color: COLORS.primary,
		textAlign: "center",
		fontSize: 12,
		marginBottom: 14,
	},
	startsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	startsContent: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 12,
	},
	textBox: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 5,
	},
	key: {
		color: "#939393",
		fontSize: 11,
	},
	value: {
		fontSize: 12,
		color: COLORS.primary,
	},
});

export default styles;
