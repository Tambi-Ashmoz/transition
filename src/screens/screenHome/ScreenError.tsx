import "./ScreenError.css";

export interface Props {
	isActive: boolean;
	onClickButtonOk: () => void;
}

export default (props: Props) => {
	return (
		<>
			<div className="screen-error" data-is-active={props.isActive}>
				<div className="screen-error-box box">
					<div className="screen-error-icon icon"></div>
					<h3 className="screen-error-text title">Error attempting login, please sign in instead.</h3>
					<div className="btn margin-left-1 screen-error-button-ok" onClick={props.onClickButtonOk}>
						OK
					</div>
				</div>
			</div>
		</>
	);
};
