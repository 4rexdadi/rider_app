const COLORS = {
	primary: "#111827",
	secondary: "#F4C430",

	gray: "gray",
	white: "#fff",
	offWhite: "#E1DEDE",
};

const FONTS = {
	inter100: "interThin",
	inter200: "interExtraLight",
	inter300: "interLight",
	inter400: "interRegular",
	inter500: "interMedium",
	inter600: "interSemiBold",
	inter700: "interBold",
	inter800: "interExtraBold",
	inter900: "interBlack",
};

const SHADOWS = {
	small: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	medium: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},
	large: {
		shadowColor: "#00000040",
		shadowOffset: {
			width: 4,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5.84,
		elevation: 7,
	},
};

export { COLORS, FONTS, SHADOWS };
