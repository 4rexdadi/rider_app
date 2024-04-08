import { FC } from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

interface GoogleSvgProps {
	styles: any;
}

const GoogleSvg: FC<GoogleSvgProps> = ({ styles }): JSX.Element => {
	return (
		<Svg style={styles} width="25" height="24" viewBox="0 0 25 24" fill="none">
			<G id="Social icon" clip-path="url(#clip0_4978_3178)">
				<Path
					id="Vector"
					d="M24.2663 12.2764C24.2663 11.4607 24.2001 10.6406 24.059 9.83807H12.7402V14.4591H19.222C18.953 15.9494 18.0888 17.2678 16.8233 18.1056V21.1039H20.6903C22.9611 19.0139 24.2663 15.9274 24.2663 12.2764Z"
					fill="#4285F4"
				/>
				<Path
					id="Vector_2"
					d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z"
					fill="#34A853"
				/>
				<Path
					id="Vector_3"
					d="M6.00277 14.3003C5.50011 12.8099 5.50011 11.1961 6.00277 9.70575V6.61481H2.01674C0.314734 10.0056 0.314734 14.0004 2.01674 17.3912L6.00277 14.3003Z"
					fill="#FBBC04"
				/>
				<Path
					id="Vector_4"
					d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z"
					fill="#EA4335"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_4978_3178">
					<Rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0.5)"
					/>
				</ClipPath>
			</Defs>
		</Svg>
	);
};

export default GoogleSvg;
