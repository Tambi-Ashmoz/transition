import React, { useState } from "react";
import { animateDiv } from "../../hooks/UseAnimate";
import ScreenError from "./ScreenError";
import "./ScreenHome.css";
import ScreenLogin from "./ScreenLogin";
import ScreenLogo from "./ScreenLogo";
import ScreenMenu from "./ScreenMenu";

interface Props {}

export const ScreenHome: React.FC<Props> = (props: Props): JSX.Element => {
	const [isActiveScreenLogo, setIsActiveScreenLogo] = useState(true);
	const [isActiveScreenError, setIsActiveScreenError] = useState(false);
	const [isActiveScreenLogin, setIsActiveScreenLogin] = useState(false);
	const [isActiveScreenMenu, setIsActiveScreenMenu] = useState(false);

	const onClickScreenLogoButtonLogin = () => {
		setIsActiveScreenLogo(false);
		setIsActiveScreenError(true);

		animateDiv("screen-logo", "screen-error");
	};

	const onClickScreenLogoButtonSignIn = () => {
		setIsActiveScreenLogo(false);
		setIsActiveScreenLogin(true);

		animateDiv("screen-logo", "screen-login");
	};

	const onClickScreenErrorButtonOk = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenError(false);

		animateDiv("screen-error", "screen-logo");
	};

	const onClickScreenLoginButtonGoogle = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv("screen-login", "screen-logo");
	};

	const onClickScreenLoginButtonGitHub = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv("screen-login", "screen-logo");
	};

	const onClickScreenLoginButtonSso = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv("screen-login", "screen-logo");
	};

	const onClickScreenLoginButtonLogin = () => {
		setIsActiveScreenLogin(false);
		setIsActiveScreenMenu(true);

		animateDiv("screen-login", "screen-menu");
	};

	const onClickScreenMenuLogout = () => {
		setIsActiveScreenMenu(false);
		setIsActiveScreenLogin(true);

		animateDiv("screen-menu", "screen-login");
	};

	const onClickScreenMenuItem = () => {};

	return (
		<>
			<div className="screen-home">
				<ScreenLogo
					onClickButtonLogin={onClickScreenLogoButtonLogin}
					onClickButtonSignIn={onClickScreenLogoButtonSignIn}
					isActive={isActiveScreenLogo}
				/>
				<ScreenError onClickButtonOk={onClickScreenErrorButtonOk} isActive={isActiveScreenError} />
				<ScreenLogin
					onClickButtonLogin={onClickScreenLoginButtonLogin}
					onClickButtonGoogle={onClickScreenLoginButtonGoogle}
					onClickButtonGitHub={onClickScreenLoginButtonGitHub}
					onClickButtonSso={onClickScreenLoginButtonSso}
					isActive={isActiveScreenLogin}
				/>
				<ScreenMenu onClickButtonMenuItem={onClickScreenMenuItem} onClickButtonMenuLogout={onClickScreenMenuLogout} isActive={isActiveScreenMenu} />
			</div>
		</>
	);
};
