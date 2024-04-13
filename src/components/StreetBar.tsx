import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import { COLORS, FONTS } from "../constants/constant";

interface StreetBarProps {
	distance: string;
	address: string;
	time: string;
}

const StreetBar: FC<StreetBarProps> = ({
	distance,
	address,
	time,
}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
				<Circle cx="17.5" cy="17.5" r="17.5" fill={COLORS.white} />
				<Path
					d="M14.2793 11.28C14.353 11.2113 14.4121 11.1285 14.4531 11.0365C14.4941 10.9445 14.5162 10.8452 14.5179 10.7445C14.5197 10.6438 14.5012 10.5438 14.4635 10.4504C14.4257 10.357 14.3696 10.2722 14.2984 10.201C14.2272 10.1297 14.1423 10.0736 14.0489 10.0359C13.9555 9.99816 13.8555 9.97963 13.7548 9.98141C13.6541 9.98319 13.5548 10.0052 13.4628 10.0462C13.3708 10.0872 13.288 10.1463 13.2193 10.22L7.21934 16.22C7.07889 16.3606 7 16.5513 7 16.75C7 16.9488 7.07889 17.1394 7.21934 17.28L13.2193 23.28C13.288 23.3537 13.3708 23.4128 13.4628 23.4538C13.5548 23.4948 13.6541 23.5168 13.7548 23.5186C13.8555 23.5204 13.9555 23.5018 14.0489 23.4641C14.1423 23.4264 14.2272 23.3703 14.2984 23.299C14.3696 23.2278 14.4257 23.143 14.4635 23.0496C14.5012 22.9562 14.5197 22.8562 14.5179 22.7555C14.5162 22.6548 14.4941 22.5555 14.4531 22.4635C14.4121 22.3715 14.353 22.2887 14.2793 22.22L9.55934 17.5H18.7493C21.07 17.5 23.2956 18.4219 24.9365 20.0628C26.5775 21.7038 27.4993 23.9294 27.4993 26.25C27.4993 26.4489 27.5784 26.6397 27.719 26.7803C27.8597 26.921 28.0504 27 28.2493 27C28.4483 27 28.639 26.921 28.7797 26.7803C28.9203 26.6397 28.9993 26.4489 28.9993 26.25C28.9993 20.59 24.4093 16 18.7493 16H9.55934L14.2793 11.28Z"
					fill={COLORS.primary}
				/>
			</Svg>

			<View>
				<Text style={styles.distanceText}>{distance}</Text>
				<Text style={styles.addressText}>{address}</Text>
			</View>

			<View style={styles.time}>
				<Text style={styles.timeText}>{time}</Text>
			</View>
		</View>
	);
};

export default StreetBar;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.primary,
		borderRadius: 8,
	},
	distanceText: {
		color: COLORS.offWhite,
		fontSize: 14,
		fontFamily: FONTS.inter500,
	},
	addressText: {
		color: COLORS.white,
		fontSize: 16,
		fontFamily: FONTS.inter500,
	},
	time: {
		backgroundColor: COLORS.secondary,
		padding: 5,
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
	},
	timeText: {
		color: COLORS.primary,
		fontSize: 16,
		fontFamily: FONTS.inter500,
		textAlign: "center",
	},
});
