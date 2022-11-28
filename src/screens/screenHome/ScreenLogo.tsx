import { RefObject, useEffect, useRef } from "react";
import "./ScreenLogo.css";

export interface Props {
	isActive: boolean;
	setRefs: (refs: { [key: string]: RefObject<HTMLDivElement> }) => void;
	onClickButtonLogin: () => void;
	onClickButtonSignIn: () => void;
}

export default (props: Props) => {
	const refMain = useRef<HTMLDivElement>(null);
	const refBox = useRef<HTMLDivElement>(null);
	const refIcon = useRef<HTMLDivElement>(null);
	const refTitle = useRef<HTMLDivElement>(null);
	const refButtonLogin = useRef<HTMLDivElement>(null);
	const refButtonSignIn = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRefs({ refMain, refBox, refIcon, refTitle, refButtonLogin, refButtonSignIn });
	}, []);

	return (
		<>
			<div ref={refMain} className="screen-logo" data-is-active={props.isActive}>
				<div ref={refBox} className="screen-logo-box">
					<div className="screen-logo-box-logo">
						<div ref={refIcon} className="screen-logo-icon"></div>
						<h3 ref={refTitle} className="screen-logo-text">
							redis
						</h3>
						<div ref={refButtonLogin} className="btn margin-left-1" onClick={props.onClickButtonLogin}>
							Login
						</div>
						<div ref={refButtonSignIn} className="btn margin-left-1" onClick={props.onClickButtonSignIn}>
							Sign in
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
