import BackSvg from "@/assets/svg/BackSvg";
import { router } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
	headerTitle: string;
	showBackBtn?: boolean;
}

const Header: FC<HeaderProps> = ({
	headerTitle,
	showBackBtn = false,
}): JSX.Element => {
	return (
		<View style={styles.container}>
			{showBackBtn ? (
				<TouchableOpacity onPress={() => router.back()} style={styles.btn}>
					<BackSvg styles={styles.backSvg} />
				</TouchableOpacity>
			) : (
				<View style={{ width: 40, height: 40 }} />
			)}

			<Text style={styles.title}>{headerTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
		marginTop: 36,
		marginBottom: 39,
	},
	title: {
		fontSize: 20,
		color: "#FCD34D",
		textAlign: "center",
		fontFamily: "interBold",
		flex: 1,
		marginRight: 40,
	},
	btn: {
		alignSelf: "flex-start",
	},
	backSvg: {
		width: 40,
		height: 40,
	},
});

export default Header;
