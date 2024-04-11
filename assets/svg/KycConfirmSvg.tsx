import { FC } from "react";
import { Path, Svg } from "react-native-svg";

interface KycConfirmSvgProps {}

const KycConfirmSvg: FC<KycConfirmSvgProps> = ({}): JSX.Element => {
	return (
		<Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
			<Path
				d="M32.0002 5.33301L39.0046 10.4424L47.6744 10.4259L50.3379 18.6766L57.3616 23.7593L54.6668 31.9997L57.3616 40.2401L50.3379 45.3227L47.6744 53.5734L39.0046 53.557L32.0002 58.6663L24.9958 53.557L16.3259 53.5734L13.6624 45.3227L6.63867 40.2401L9.33351 31.9997L6.63867 23.7593L13.6624 18.6766L16.3259 10.4259L24.9958 10.4424L32.0002 5.33301Z"
				fill="#111827"
				stroke="#111827"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path d="M22.666 31.9997L29.3327 38.6663L42.666 25.333" fill="#111827" />
			<Path
				d="M22.666 31.9997L29.3327 38.6663L42.666 25.333"
				stroke="#FCD34D"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default KycConfirmSvg;
