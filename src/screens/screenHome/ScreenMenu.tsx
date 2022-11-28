import { RefObject, useEffect, useRef } from "react";
import "./ScreenMenu.css";

export interface Props {
	isActive: boolean;
	setRefs: (refs: { [key: string]: RefObject<HTMLDivElement> }) => void;
	onClickButtonMenuItem: () => void;
	onClickButtonMenuLogout: () => void;
}

export default (props: Props) => {
	const refMain = useRef<HTMLDivElement>(null);
	const refBox = useRef<HTMLDivElement>(null);
	const refBoxLogo = useRef<HTMLDivElement>(null);
	const refIcon = useRef<HTMLDivElement>(null);
	const refTitle = useRef<HTMLDivElement>(null);
	const refLogout = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRefs({ refMain, refBox, refBoxLogo, refIcon, refTitle, refLogout });
	}, []);

	return (
		<>
			<div ref={refMain} className="screen-menu" data-is-active={props.isActive}>
				<div ref={refBox} className="screen-menu-box">
					<div ref={refBoxLogo} className="screen-menu-box-logo">
						<div ref={refIcon} className="screen-menu-icon"></div>
						<h3 ref={refTitle} className="screen-menu-text">
							redis
						</h3>
					</div>

					<div className="screen-menu-item" onClick={props.onClickButtonMenuItem}>
						Subscriptions
					</div>
					<div className="screen-menu-item" onClick={props.onClickButtonMenuItem}>
						Databases
					</div>
					<div className="screen-menu-item" onClick={props.onClickButtonMenuItem}>
						Data Access Control
					</div>
					<div className="screen-menu-item" onClick={props.onClickButtonMenuItem}>
						Access MAnagement
					</div>
					<div className="screen-menu-item" onClick={props.onClickButtonMenuItem}>
						Logs
					</div>
				</div>
				<div ref={refLogout} className="screen-menu-logout" onClick={props.onClickButtonMenuLogout}>
					Logout
				</div>
			</div>
		</>
	);
};
