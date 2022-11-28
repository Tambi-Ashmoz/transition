import React from "react";
import "./Button.css";

interface Props {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

export const Button: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			<div className={"btn " + props.className} onClick={props.onClick}>
				{props.children}
			</div>
		</>
	);
};
