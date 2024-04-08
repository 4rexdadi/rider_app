import { FC } from "react";
import { Path, Rect, Svg } from "react-native-svg";

interface ForgotPasswordSvgProps {
	styles: any;
}

const ForgotPasswordSvg: FC<ForgotPasswordSvgProps> = ({
	styles,
}): JSX.Element => {
	return (
		<Svg style={styles} width="67" height="66" viewBox="0 0 67 66" fill="none">
			<Rect x="5.5" y="5" width="56" height="56" rx="28" fill="#1F2937" />
			<Rect
				x="5.5"
				y="5"
				width="56"
				height="56"
				rx="28"
				stroke="#1F2937"
				stroke-width="10"
			/>
			<Path
				d="M37.5827 27.75L41.666 23.6667M43.9993 21.3334L41.666 23.6667L43.9993 21.3334ZM32.7877 32.545C33.3901 33.1394 33.8689 33.8471 34.1967 34.6273C34.5245 35.4075 34.6947 36.2448 34.6975 37.0911C34.7004 37.9374 34.5358 38.7758 34.2132 39.5582C33.8907 40.3406 33.4166 41.0515 32.8182 41.6499C32.2198 42.2483 31.5089 42.7224 30.7265 43.0449C29.9441 43.3675 29.1057 43.5321 28.2594 43.5292C27.4132 43.5264 26.5758 43.3562 25.7956 43.0284C25.0154 42.7006 24.3077 42.2218 23.7133 41.6194C22.5445 40.4092 21.8977 38.7883 21.9124 37.1059C21.927 35.4235 22.6018 33.8141 23.7915 32.6244C24.9812 31.4347 26.5906 30.7598 28.273 30.7452C29.9554 30.7306 31.5763 31.3774 32.7865 32.5462L32.7877 32.545ZM32.7877 32.545L37.5827 27.75L32.7877 32.545ZM37.5827 27.75L41.0827 31.25L45.166 27.1667L41.666 23.6667L37.5827 27.75Z"
				stroke="#FCD34D"
				stroke-width="2.33333"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default ForgotPasswordSvg;
