import "./ScreenMenu.css";

export interface Props {
	isActive: boolean;
	onClickButtonMenuItem: () => void;
	onClickButtonMenuLogout: () => void;
}

export default (props: Props) => {
	return (
		<>
			<div className="screen-menu" data-is-active={props.isActive}>
				<div className="screen-menu-box box">
					<div className="screen-menu-box-logo logobg">
						<div className="screen-menu-icon icon"></div>
						<h3 className="screen-menu-text text">redis</h3>
					</div>

					<div className="screen-menu-item menu-item" onClick={props.onClickButtonMenuItem}>
						Subscriptions
					</div>
					<div className="screen-menu-item menu-item" onClick={props.onClickButtonMenuItem}>
						Databases
					</div>
					<div className="screen-menu-item menu-item" onClick={props.onClickButtonMenuItem}>
						Data Access Control
					</div>
					<div className="screen-menu-item menu-item" onClick={props.onClickButtonMenuItem}>
						Access MAnagement
					</div>
					<div className="screen-menu-item menu-item" onClick={props.onClickButtonMenuItem}>
						Logs
					</div>
				</div>
				<div className="screen-menu-logout btn" onClick={props.onClickButtonMenuLogout}>
					Logout
				</div>
			</div>
		</>
	);
};
