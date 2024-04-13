import {
	CallSvg,
	CarSvg,
	NotificationSvg,
} from "@/assets/svg/DashboardHeaderSvg";
import { router } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants/constant";

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = ({}): JSX.Element => {
	const goOffline = () => {
		router.push("/dashboard/(offline)/offlinePage");
	};

	const handleNotification = () => {};

	const handleCustomerService = () => {};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => handleCustomerService()}>
				<CallSvg />
			</TouchableOpacity>

			<TouchableOpacity onPress={() => goOffline()} style={styles.goOnline}>
				<CarSvg />
				<Text style={styles.goOnlineText}>Go offline</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => handleNotification()}>
				<NotificationSvg />
			</TouchableOpacity>
		</View>
	);
};

export default DashboardHeader;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		paddingTop: 60,
		paddingBottom: 16,
		paddingHorizontal: 22,
		backgroundColor: COLORS.white,
	},
	goOnline: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 7,
		padding: 5,
		borderRadius: 2,
		backgroundColor: COLORS.secondary,
		...SHADOWS.large,
	},
	goOnlineText: {
		color: COLORS.primary,
		fontSize: 12,
		fontFamily: FONTS.inter500,
	},
});
