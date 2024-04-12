import {
	CallSvg,
	CarSvg,
	NotificationSvg,
} from "@/assets/svg/DashboardHeaderSvg";
import { router } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
		backgroundColor: "#fff",
	},
	goOnline: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 7,
		padding: 5,
		borderRadius: 2,
		backgroundColor: "#F4C430",
		shadowColor: "#00000040",
		shadowOffset: {
			height: 4,
			width: 4,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		// box-shadow: 0px 4px 4px 2px ;
	},
	goOnlineText: {
		color: "#111827",
		fontSize: 12,
	},
});
