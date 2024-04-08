import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

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
		fontFamily: "interBold",
		marginBottom: 8,
	},
	subTitle: {
		fontSize: 16,
		color: "#667085",
		textAlign: "center",
		fontFamily: "interRegular",
	},
});

export default ForgotPasswordHeader;
