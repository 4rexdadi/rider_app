import { FC } from "react";
import { Circle, G, Path, Svg } from "react-native-svg";

interface BackSvgProps {
	styles: any;
}

const BackSvg: FC<BackSvgProps> = ({ styles }): JSX.Element => {
	return (
		<Svg style={styles} width="50" height="50" viewBox="0 0 50 50" fill="none">
			<G filter="url(#filter0_d_4672_7174)">
				<Circle cx="25" cy="21" r="20" fill="#FCD34D" />
				<Circle cx="25" cy="21" r="20" stroke="white" />
			</G>
			<Path
				d="M29.1334 14.9025L27.7984 13.575L20.3809 21L27.8059 28.425L29.1334 27.0975L23.0359 21L29.1334 14.9025Z"
				fill="#111827"
			/>
		</Svg>
	);
};

export default BackSvg;
