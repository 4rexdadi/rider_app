import Buttons from "@/src/components/Buttons";
import { router } from "expo-router";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import styles from "./OfflineStyles";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}): JSX.Element => {
	const goOnline = () => {
		router.push("/dashboard/(online)/home");
	};

	const starts = {
		MoneyEarned: "# 256,000.50",
		TotalDistance: "755KM",
		HoursSpentOnline: "7 Hours",
		TotalJobs: 15,
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.userImage}
					source={require("../../../../assets/images/rider.png")}
				/>
			</View>
			<Image
				style={styles.backgroundImg}
				source={require("../../../../assets/images/rider.png")}
			/>

			<View style={styles.content}>
				<View style={styles.starts}>
					<Text style={styles.title}>Yesterday</Text>

					<View style={styles.startsContainer}>
						<View style={styles.startsContent}>
							<View style={styles.textBox}>
								<Text style={styles.key}>Money earned</Text>
								<Text style={styles.value}>{starts.MoneyEarned}</Text>
							</View>

							<View style={styles.textBox}>
								<Text style={styles.key}>Total Distance</Text>
								<Text style={styles.value}>{starts.TotalDistance}</Text>
							</View>
						</View>

						<View style={styles.startsContent}>
							<View style={styles.textBox}>
								<Text style={styles.key}>Hours spent online</Text>
								<Text style={styles.value}>{starts.HoursSpentOnline}</Text>
							</View>

							<View style={styles.textBox}>
								<Text style={styles.key}>Total Jobs</Text>
								<Text style={styles.value}>{starts.TotalJobs}</Text>
							</View>
						</View>
					</View>
				</View>

				<Buttons
					onPress={() => goOnline()}
					marginTop={0}
					marginBottom={32}
					title="Go online"
				/>
			</View>
		</View>
	);
};

export default Offline;
