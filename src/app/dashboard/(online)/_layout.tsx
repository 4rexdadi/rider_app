import {
	HomeSvg,
	OrderSvg,
	ProfileSvg,
	WalletSvg,
} from "@/assets/svg/DashboardTabSvg";
import DashboardHeader from "@/src/components/DashboardHeader";
import { Tabs } from "expo-router";

const TabLayout = () => {
	const tabsColor = "#111827";

	return (
		<Tabs
			initialRouteName="home"
			screenOptions={{
				header: DashboardHeader,
			}}
		>
			<Tabs.Screen
				options={{
					tabBarIcon: HomeSvg,
					tabBarActiveTintColor: tabsColor,
					tabBarLabel: "Home",
				}}
				name="home"
			/>

			<Tabs.Screen
				options={{
					tabBarIcon: WalletSvg,
					tabBarActiveTintColor: tabsColor,
					tabBarLabel: "Wallet",
				}}
				name="wallet"
			/>

			<Tabs.Screen
				options={{
					tabBarIcon: OrderSvg,
					tabBarActiveTintColor: tabsColor,
					tabBarLabel: "Order",
				}}
				name="order"
			/>

			<Tabs.Screen
				options={{
					tabBarIcon: ProfileSvg,
					tabBarActiveTintColor: tabsColor,
					tabBarLabel: "Profile",
				}}
				name="profile"
			/>
		</Tabs>
	);
};

export default TabLayout;
