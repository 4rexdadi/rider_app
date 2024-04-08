import { FC } from "react";
import { Path, Rect, Svg } from "react-native-svg";

interface EmailConfirmSvgProps {
	styles: any;
}

const EmailConfirmSvg: FC<EmailConfirmSvgProps> = ({ styles }): JSX.Element => {
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
				d="M45.1673 26C45.1673 24.7166 44.1173 23.6666 42.834 23.6666H24.1673C22.884 23.6666 21.834 24.7166 21.834 26M45.1673 26V40C45.1673 41.2833 44.1173 42.3333 42.834 42.3333H24.1673C22.884 42.3333 21.834 41.2833 21.834 40V26M45.1673 26L33.5007 34.1666L21.834 26"
				stroke="#FBBF24"
				stroke-width="2.33333"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default EmailConfirmSvg;
