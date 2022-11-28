import { RefObject, useEffect, useRef } from "react";
import "./ScreenError.css";

export interface Props {
	isActive: boolean;
	setRefs: (refs: { [key: string]: RefObject<HTMLDivElement> }) => void;
	onClickButtonOk: () => void;
}

export default (props: Props) => {
	const refMain = useRef<HTMLDivElement>(null);
	const refBox = useRef<HTMLDivElement>(null);
	const refIcon = useRef<HTMLDivElement>(null);
	const refTitle = useRef<HTMLDivElement>(null);
	const refButtonOk = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRefs({ refMain, refBox, refIcon, refTitle, refButtonOk });
	}, []);

	return (
		<>
			<div ref={refMain} className="screen-error" data-is-active={props.isActive}>
				<div ref={refBox} className="screen-error-box">
					<div ref={refIcon} className="screen-error-icon"></div>
					<h3 ref={refTitle} className="screen-error-text">
						Error attempting login, please sign in instead.
					</h3>
					<div ref={refButtonOk} className="btn margin-left-1 screen-error-button-ok" onClick={props.onClickButtonOk}>
						OK
					</div>
				</div>
			</div>
		</>
	);
};
