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
		<View
			style={{
				marginBottom: showBackBtn ? 35 : 46,
				marginTop: showBackBtn ? 0 : 16,
				...styles.container,
			}}
		>
			{showBackBtn && (
				<TouchableOpacity onPress={() => router.back()} style={styles.btn}>
					<BackSvg styles={styles.backSvg} />
				</TouchableOpacity>
			)}

			<Text style={{ marginRight: showBackBtn ? 40 : 0, ...styles.title }}>
				{headerTitle}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 20,
		color: "#FCD34D",
		textAlign: "center",
		fontFamily: "interBold",
		flex: 1,
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
