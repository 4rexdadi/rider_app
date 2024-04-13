import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONTS } from "../constants/constant";

interface ForgotPasswordHeaderProps {
	Icon: any;
	title: string;
	subTitle: string;
}

const ForgotPasswordHeader: FC<ForgotPasswordHeaderProps> = ({
	Icon,
	title,
	subTitle,
}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Icon style={styles.icon} />

			<Text style={styles.title}>{title}</Text>

			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		width: 56,
		height: 56,
		marginBottom: 24,
	},
	title: {
		fontSize: 24,
		color: "#101828",
		textAlign: "center",
		fontFamily: FONTS.inter700,
		marginBottom: 8,
	},
	subTitle: {
		fontSize: 16,
		color: "#667085",
		textAlign: "center",
		fontFamily: FONTS.inter400,
	},
});

export default ForgotPasswordHeader;
