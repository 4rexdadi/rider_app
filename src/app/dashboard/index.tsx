import { Redirect } from "expo-router";
import { FC } from "react";

interface indexProps {}

const index: FC<indexProps> = ({}): JSX.Element => {
	return <Redirect href="/dashboard/(offline)/offlinePage" />;
};

export default index;
