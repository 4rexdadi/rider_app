import { FC } from "react";
import { Path, Svg } from "react-native-svg";

interface HomeSvgProps {
	color: string;
}

export const HomeSvg: FC<HomeSvgProps> = ({ color }): JSX.Element => {
	return (
		<Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.2881 12.5484C11.3453 12.5484 12.2058 13.4028 12.2058 14.4529V17.1538C12.2058 17.3794 12.3866 17.5603 12.6184 17.5656H14.292C15.6108 17.5656 16.6829 16.5067 16.6829 15.2054V7.54529C16.6768 7.09749 16.4634 6.67602 16.0973 6.39593L10.3083 1.77915C9.53122 1.16363 8.44419 1.16363 7.66449 1.7809L1.91502 6.39417C1.53483 6.68305 1.32146 7.10451 1.31707 7.56022V15.2054C1.31707 16.5067 2.38917 17.5656 3.708 17.5656H5.39737C5.63532 17.5656 5.82849 17.3768 5.82849 17.145C5.82849 17.0941 5.83463 17.0431 5.84517 16.9949V14.4529C5.84517 13.4089 6.70039 12.5554 7.74966 12.5484H10.2881ZM14.292 18.8827H12.6026C11.635 18.8598 10.8887 18.1003 10.8887 17.1538V14.4529C10.8887 14.1289 10.6191 13.8655 10.2881 13.8655H7.75405C7.43005 13.8672 7.16224 14.1315 7.16224 14.4529V17.145C7.16224 17.2109 7.15346 17.2741 7.13502 17.3338C7.0402 18.203 6.29737 18.8827 5.39737 18.8827H3.708C1.66302 18.8827 0 17.2328 0 15.2054V7.55407C0.00878049 6.68129 0.410927 5.88227 1.10546 5.35632L6.84351 0.750951C8.10702 -0.250024 9.86751 -0.250024 11.1284 0.749195L16.9077 5.35895C17.5864 5.87612 17.9886 6.67339 18 7.53563V15.2054C18 17.2328 16.337 18.8827 14.292 18.8827Z"
				fill={color}
			/>
		</Svg>
	);
};

interface WalletSvgProps {
	color: string;
}

export const WalletSvg: FC<WalletSvgProps> = ({ color }): JSX.Element => {
	return (
		<Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
			<Path
				d="M13.5 11.15H7.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M2.5 11.15V6.53003C2.5 4.49003 4.15 2.84003 6.19 2.84003H11.81C13.85 2.84003 15.5 4.11002 15.5 6.15002"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M17.98 12.2C17.48 12.68 17.24 13.42 17.44 14.18C17.69 15.11 18.61 15.7 19.57 15.7H20.5V17.15C20.5 19.36 18.71 21.15 16.5 21.15H6.5C4.29 21.15 2.5 19.36 2.5 17.15V10.15C2.5 7.94002 4.29 6.15002 6.5 6.15002H16.5C18.7 6.15002 20.5 7.95002 20.5 10.15V11.6H19.42C18.86 11.6 18.35 11.82 17.98 12.2Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M22.5002 12.62V14.68C22.5002 15.24 22.0402 15.7 21.4702 15.7H19.5402C18.4602 15.7 17.4702 14.91 17.3802 13.83C17.3202 13.2 17.5602 12.61 17.9802 12.2C18.3502 11.82 18.8602 11.6 19.4202 11.6H21.4702C22.0402 11.6 22.5002 12.06 22.5002 12.62Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

interface OrderSvgProps {
	color: string;
}

export const OrderSvg: FC<OrderSvgProps> = ({ color }): JSX.Element => {
	return (
		<Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
			<Path
				d="M12.6398 7.62H7.36977C5.50977 7.62 5.08977 8.55001 4.85977 9.70001L4.00977 13.75H16.0098L15.1598 9.70001C14.9098 8.55001 14.4998 7.62 12.6398 7.62Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M17.4901 20.36C17.5701 21.24 16.8701 22 15.9701 22H14.5601C13.7501 22 13.6401 21.65 13.4901 21.23L13.3401 20.78C13.1301 20.17 12.9901 19.75 11.9101 19.75H8.07013C6.99013 19.75 6.83012 20.22 6.64012 20.78L6.49013 21.23C6.35013 21.66 6.24012 22 5.42012 22H4.01012C3.11012 22 2.40013 21.24 2.49013 20.36L2.91013 15.79C3.02013 14.66 3.23012 13.74 5.20012 13.74H14.7701C16.7401 13.74 16.9501 14.66 17.0601 15.79L17.4901 20.36Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M4 11.5H3.25"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M16.75 11.5H16"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M5.5 16.75H7.75"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M12.25 16.75H14.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M19.2092 8.73998C19.4892 8.08998 19.3891 7.20999 18.8691 6.43999C18.3591 5.66999 17.5791 5.23999 16.8691 5.24999"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M22.3206 9.72998C22.7406 8.21998 22.4406 6.37002 21.3706 4.77002C20.3006 3.17002 18.7006 2.19 17.1406 2"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

interface ProfileSvgProps {
	color: string;
}

export const ProfileSvg: FC<ProfileSvgProps> = ({ color }): JSX.Element => {
	return (
		<Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
			<Path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				fill={color}
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
				fill="white"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M18.7398 19.38C16.9598 21.01 14.5998 22 11.9998 22C9.39977 22 7.03977 21.01 5.25977 19.38C5.35977 18.44 5.95977 17.52 7.02977 16.8C9.76977 14.98 14.2498 14.98 16.9698 16.8C18.0398 17.52 18.6398 18.44 18.7398 19.38Z"
				fill="white"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
