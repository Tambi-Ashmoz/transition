import "./ScreenLogin.css";

export interface Props {
	isActive: boolean;
	onClickButtonLogin: () => void;
	onClickButtonGoogle: () => void;
	onClickButtonGitHub: () => void;
	onClickButtonSso: () => void;
}

export default (props: Props) => {
	return (
		<>
			<div className="screen-login" data-is-active={props.isActive}>
				<div className="screen-login-box box">
					<div className="screen-login-box-left">
						<div className="screen-login-icon icon"></div>
						<h3 className="screen-login-title text">redis</h3>
					</div>
					<div className="screen-login-box-right">
						<h3 className="screen-login-title">sign in with</h3>
						<div className="btn" onClick={props.onClickButtonGoogle}>
							Google
						</div>
						<div className="btn" onClick={props.onClickButtonGitHub}>
							GitHub
						</div>
						<div className="btn" onClick={props.onClickButtonSso}>
							SSO
						</div>
						<h3 className="screen-login-title">Sign in with email</h3>
						<div className="screen-login-text">Email:</div>
						<input name="email" type="text" className="" placeholder="Email" autoComplete="off" value="" onChange={() => {}} />
						<div className="screen-login-text">Password:</div>
						<input name="password" type="password" className="" placeholder="Password" autoComplete="off" value="" onChange={() => {}} />
						<div className="btn screen-login-button-login" onClick={props.onClickButtonLogin}>
							Login
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
