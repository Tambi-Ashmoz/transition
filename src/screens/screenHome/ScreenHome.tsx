import React, { RefObject, useState } from "react";
import { animateDiv } from "../../hooks/UseAnimate";
import ScreenError from "./ScreenError";
import "./ScreenHome.css";
import ScreenLogin from "./ScreenLogin";
import ScreenLogo from "./ScreenLogo";
import ScreenMenu from "./ScreenMenu";

interface Props {}

export const ScreenHome: React.FC<Props> = (props: Props): JSX.Element => {
	const [refsScreenLogo, setRefsScreenLogo] = useState<{ [key: string]: RefObject<HTMLDivElement> }>();
	const [refsScreenError, setRefsScreenError] = useState<{ [key: string]: RefObject<HTMLDivElement> }>();
	const [refsScreenLogin, setRefsScreenLogin] = useState<{ [key: string]: RefObject<HTMLDivElement> }>();
	const [refsScreenMenu, setRefsScreenMenu] = useState<{ [key: string]: RefObject<HTMLDivElement> }>();

	const [isActiveScreenLogo, setIsActiveScreenLogo] = useState(true);
	const [isActiveScreenError, setIsActiveScreenError] = useState(false);
	const [isActiveScreenLogin, setIsActiveScreenLogin] = useState(false);
	const [isActiveScreenMenu, setIsActiveScreenMenu] = useState(false);

	const onClickScreenLogoButtonLogin = () => {
		setIsActiveScreenLogo(false);
		setIsActiveScreenError(true);

		animateDiv(refsScreenLogo?.refBox.current, refsScreenError?.refBox.current, 300, false);
		animateDiv(refsScreenLogo?.refIcon.current, refsScreenError?.refIcon.current, 300, false);
		animateDiv(refsScreenLogo?.refTitle.current, refsScreenError?.refTitle.current, 300, true);
		animateDiv(refsScreenLogo?.refButtonLogin.current, refsScreenError?.refButtonOk.current, 300, true);
		animateDiv(refsScreenLogo?.refButtonSignIn.current, refsScreenError?.refButtonOk.current, 300, true);
	};

	const onClickScreenLogoButtonSignIn = () => {
		setIsActiveScreenLogo(false);
		setIsActiveScreenLogin(true);

		animateDiv(refsScreenLogo?.refBox.current, refsScreenLogin?.refBox.current, 300, false);
		animateDiv(refsScreenLogo?.refBox.current, refsScreenLogin?.refBoxLeft.current, 300, false);
		animateDiv(refsScreenLogo?.refIcon.current, refsScreenLogin?.refIcon.current, 300, false);
		animateDiv(refsScreenLogo?.refTitle.current, refsScreenLogin?.refTitle.current, 300, true);
		animateDiv(refsScreenLogo?.refButtonLogin.current, refsScreenLogin?.refButtonLogin.current, 300, false);
		animateDiv(refsScreenLogo?.refButtonSignIn.current, refsScreenLogin?.refButtonGoogle.current, 300, false);
		animateDiv(refsScreenLogo?.refButtonSignIn.current, refsScreenLogin?.refButtonGitHub.current, 300, false);
		animateDiv(refsScreenLogo?.refButtonSignIn.current, refsScreenLogin?.refButtonSso.current, 300, false);
	};

	const onClickScreenErrorButtonOk = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenError(false);

		animateDiv(refsScreenError?.refBox.current, refsScreenLogo?.refBox.current, 300, false);
		animateDiv(refsScreenError?.refIcon.current, refsScreenLogo?.refIcon.current, 300, false);
		animateDiv(refsScreenError?.refTitle.current, refsScreenLogo?.refTitle.current, 300, true);
		animateDiv(refsScreenError?.refButtonOk.current, refsScreenLogo?.refButtonLogin.current, 300, true);
		animateDiv(refsScreenError?.refButtonOk.current, refsScreenLogo?.refButtonSignIn.current, 300, true);
	};

	const onClickScreenLoginButtonGoogle = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv(refsScreenLogin?.refBox.current, refsScreenLogo?.refBox.current, 300, false);
		animateDiv(refsScreenLogin?.refIcon.current, refsScreenLogo?.refIcon.current, 300, false);
		animateDiv(refsScreenLogin?.refTitle.current, refsScreenLogo?.refTitle.current, 300, true);
		animateDiv(refsScreenLogin?.refButtonLogin.current, refsScreenLogo?.refButtonLogin.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGoogle.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGitHub.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonSso.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
	};

	const onClickScreenLoginButtonGitHub = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv(refsScreenLogin?.refBox.current, refsScreenLogo?.refBox.current, 300, false);
		animateDiv(refsScreenLogin?.refIcon.current, refsScreenLogo?.refIcon.current, 300, false);
		animateDiv(refsScreenLogin?.refTitle.current, refsScreenLogo?.refTitle.current, 300, true);
		animateDiv(refsScreenLogin?.refButtonLogin.current, refsScreenLogo?.refButtonLogin.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGoogle.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGitHub.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonSso.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
	};

	const onClickScreenLoginButtonSso = () => {
		setIsActiveScreenLogo(true);
		setIsActiveScreenLogin(false);

		animateDiv(refsScreenLogin?.refBox.current, refsScreenLogo?.refBox.current, 300, false);
		animateDiv(refsScreenLogin?.refIcon.current, refsScreenLogo?.refIcon.current, 300, false);
		animateDiv(refsScreenLogin?.refTitle.current, refsScreenLogo?.refTitle.current, 300, true);
		animateDiv(refsScreenLogin?.refButtonLogin.current, refsScreenLogo?.refButtonLogin.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGoogle.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonGitHub.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
		animateDiv(refsScreenLogin?.refButtonSso.current, refsScreenLogo?.refButtonSignIn.current, 300, false);
	};

	const onClickScreenLoginButtonLogin = () => {
		setIsActiveScreenLogin(false);
		setIsActiveScreenMenu(true);

		animateDiv(refsScreenLogin?.refBox.current, refsScreenMenu?.refBox.current, 300, false);
		animateDiv(refsScreenLogin?.refBoxLeft.current, refsScreenMenu?.refBoxLogo.current, 300, false);
		animateDiv(refsScreenLogin?.refIcon.current, refsScreenMenu?.refIcon.current, 300, false);
		animateDiv(refsScreenLogin?.refTitle.current, refsScreenMenu?.refTitle.current, 300, true);
		animateDiv(refsScreenLogin?.refButtonLogin.current, refsScreenMenu?.refLogout.current, 300, true);
	};

	const onClickScreenMenuLogout = () => {
		setIsActiveScreenMenu(false);
		setIsActiveScreenLogin(true);

		animateDiv(refsScreenMenu?.refBox.current, refsScreenLogin?.refBox.current, 300, false);
		animateDiv(refsScreenMenu?.refBoxLogo.current, refsScreenLogin?.refBoxLeft.current, 300, false);
		animateDiv(refsScreenMenu?.refIcon.current, refsScreenLogin?.refIcon.current, 300, false);
		animateDiv(refsScreenMenu?.refTitle.current, refsScreenLogin?.refTitle.current, 300, true);
		animateDiv(refsScreenMenu?.refLogout.current, refsScreenLogin?.refButtonLogin.current, 300, true);
	};

	const onClickScreenMenuItem = () => {};

	return (
		<>
			<div className="screen-home">
				<ScreenLogo
					setRefs={setRefsScreenLogo}
					onClickButtonLogin={onClickScreenLogoButtonLogin}
					onClickButtonSignIn={onClickScreenLogoButtonSignIn}
					isActive={isActiveScreenLogo}
				/>
				<ScreenError setRefs={setRefsScreenError} onClickButtonOk={onClickScreenErrorButtonOk} isActive={isActiveScreenError} />
				<ScreenLogin
					setRefs={setRefsScreenLogin}
					onClickButtonLogin={onClickScreenLoginButtonLogin}
					onClickButtonGoogle={onClickScreenLoginButtonGoogle}
					onClickButtonGitHub={onClickScreenLoginButtonGitHub}
					onClickButtonSso={onClickScreenLoginButtonSso}
					isActive={isActiveScreenLogin}
				/>
				<ScreenMenu
					setRefs={setRefsScreenMenu}
					onClickButtonMenuItem={onClickScreenMenuItem}
					onClickButtonMenuLogout={onClickScreenMenuLogout}
					isActive={isActiveScreenMenu}
				/>
			</div>
		</>
	);
};
