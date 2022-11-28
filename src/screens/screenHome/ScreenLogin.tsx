import { RefObject, useEffect, useRef } from "react";
import "./ScreenLogin.css";

export interface Props {
	isActive: boolean;
	setRefs: (refs: { [key: string]: RefObject<HTMLDivElement> }) => void;
	onClickButtonLogin: () => void;
	onClickButtonGoogle: () => void;
	onClickButtonGitHub: () => void;
	onClickButtonSso: () => void;
}

export default (props: Props) => {
	const refMain = useRef<HTMLDivElement>(null);
	const refBox = useRef<HTMLDivElement>(null);
	const refBoxLeft = useRef<HTMLDivElement>(null);
	const refIcon = useRef<HTMLDivElement>(null);
	const refTitle = useRef<HTMLDivElement>(null);
	const refButtonLogin = useRef<HTMLDivElement>(null);
	const refButtonGoogle = useRef<HTMLDivElement>(null);
	const refButtonGitHub = useRef<HTMLDivElement>(null);
	const refButtonSso = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRefs({ refMain, refBox, refBoxLeft, refIcon, refTitle, refButtonLogin, refButtonGoogle, refButtonGitHub, refButtonSso });
	}, []);

	return (
		<>
			<div ref={refMain} className="screen-login" data-is-active={props.isActive}>
				<div ref={refBox} className="screen-login-box">
					<div ref={refBoxLeft} className="screen-login-box-left">
						<div ref={refIcon} className="screen-login-icon"></div>
						<h3 ref={refTitle} className="screen-login-title">
							redis
						</h3>
					</div>
					<div className="screen-login-box-right">
						<h3 className="screen-login-title">sign in with</h3>
						<div className="btn" ref={refButtonGoogle} onClick={props.onClickButtonGoogle}>
							Google
						</div>
						<div className="btn" ref={refButtonGitHub} onClick={props.onClickButtonGitHub}>
							GitHub
						</div>
						<div className="btn" ref={refButtonSso} onClick={props.onClickButtonSso}>
							SSO
						</div>
						<h3 className="screen-login-title">Sign in with email</h3>
						<div className="screen-login-text">Email:</div>
						<input name="email" type="text" className="" placeholder="Email" autoComplete="off" value="" onChange={() => {}} />
						<div className="screen-login-text">Password:</div>
						<input name="password" type="password" className="" placeholder="Password" autoComplete="off" value="" onChange={() => {}} />
						<div ref={refButtonLogin} className="btn screen-login-button-login" onClick={props.onClickButtonLogin}>
							Login
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
