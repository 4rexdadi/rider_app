import { COLORS } from "@/src/constants/constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: COLORS.white,
	},
	title: {},
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
