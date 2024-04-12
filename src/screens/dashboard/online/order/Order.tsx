import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./OrderStyles";

interface OrderProps {}

const Order: FC<OrderProps> = ({}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Order</Text>
		</View>
	);
};

export default Order;
