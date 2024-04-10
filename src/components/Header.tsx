import BackSvg from "@/assets/svg/BackSvg";
import { router } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
	headerTitle: string;
	showBackBtn?: boolean;
	activeDocTab?: "Personal Details" | "ID Proof" | "Bank Details";
}

const Header: FC<HeaderProps> = ({
	headerTitle,
	showBackBtn = false,
	activeDocTab,
}): JSX.Element => {
	const docs = ["Personal Details", "ID Proof", "Bank Details"];

	return (
		<>
			<View
				style={{ marginBottom: activeDocTab ? 18 : 39, ...styles.container }}
			>
				{showBackBtn ? (
					<TouchableOpacity onPress={() => router.back()} style={styles.btn}>
						<BackSvg styles={styles.backSvg} />
					</TouchableOpacity>
				) : (
					<View style={{ width: 40, height: 40 }} />
				)}

				<Text style={styles.title}>{headerTitle}</Text>
			</View>

			{activeDocTab && (
				<View style={styles.kycContainer}>
					{docs.map((doc, i) => (
						<View key={i} style={styles.kycContent}>
							<Text style={styles.kycTitle}>{doc}</Text>
							<View
								style={{
									backgroundColor: activeDocTab === doc ? "#FFD251" : "#D0D5DD",
									...styles.kycLine,
								}}
							/>
						</View>
					))}
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
		marginTop: 20,
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
	kycContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 20,
	},
	kycContent: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		width: "auto",
	},
	kycTitle: {
		fontSize: 14,
		color: "#D0D5DD",
		fontFamily: "interRegular",
		marginBottom: 5,
	},
	kycLine: {
		width: "110%",
		height: 3,
	},
});

export default Header;
