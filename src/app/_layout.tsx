import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
	initialRouteName: "signUpPage",
};

const Layout = () => {
	const [fontsLoaded, error] = useFonts({
		interThin: require("../../assets/fonts/inter/Inter-Thin.ttf"),
		interBlack: require("../../assets/fonts/inter/Inter-Black.ttf"),
		interBold: require("../../assets/fonts/inter/Inter-Bold.ttf"),
		interExtraBold: require("../../assets/fonts/inter/Inter-ExtraBold.ttf"),
		interSemiBold: require("../../assets/fonts/inter/Inter-SemiBold.ttf"),
		interExtraLight: require("../../assets/fonts/inter/Inter-ExtraLight.ttf"),
		interLight: require("../../assets/fonts/inter/Inter-Light.ttf"),
		interMedium: require("../../assets/fonts/inter/Inter-Medium.ttf"),
		interRegular: require("../../assets/fonts/inter/Inter-Regular.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Stack initialRouteName="signUpPage">
			<Stack.Screen name="signUpPage" />
		</Stack>
	);
};

export default Layout;
