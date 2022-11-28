import { ReactElement } from "react";

export const useAnimate = (refFrom: ReactElement, refTo: ReactElement, time: number) => {
	const publish = function () {};

	return {};
};

export const animateDiv = (
	divA: HTMLDivElement | null | undefined,
	divB: HTMLDivElement | null | undefined,
	duration: number,
	isDeepClone: boolean,
	onStart?: { (): void },
	onEnd?: { (): void }
) => {
	if (!divA || !divB) {
		return;
	}

	onStart?.();

	let rectA = divA.getBoundingClientRect();
	let rectB = divB.getBoundingClientRect();

	let styleA = window.getComputedStyle(divA);
	let styleB = window.getComputedStyle(divB);

	let divAClone = divA.cloneNode(isDeepClone) as HTMLDivElement;

	document.body.appendChild(divAClone);

	// Array.from(styleA).forEach((key) => divAClone.style.setProperty(key, styleA.getPropertyValue(key), styleA.getPropertyPriority(key)));

	const styles: any = [
		"marginTop",
		"marginRight",
		"marginBottom",
		"marginLeft",
		"padding",
		"color",
		"backgroundColor",
		"fontSize",
		"display",
		"alignContent",
		"justifyContent",
		"flexDirection",
		"backgroundImage",
		"borderRadius",
		"boxSizing",
		"textShadow",
		"borderTopWidth",
		"borderRightWidth",
		"borderBottomWidth",
		"borderLeftWidth",
		"borderTopStyle",
		"borderRightStyle",
		"borderBottomStyle",
		"borderLeftStyle",
		"borderTopColor",
		"borderRightColor",
		"borderBottomColor",
		"borderLeftColor",
	];

	divA.style.opacity = "1";
	divB.style.opacity = "0";

	divAClone.style.transitionProperty = "none";
	divAClone.style.transitionDuration = "0ms";
	divAClone.style.transitionDelay = "0ms";
	divAClone.style.transitionTimingFunction = "ease";
	divAClone.style.position = "absolute";
	divAClone.style.overflow = "hidden";
	divAClone.style.left = rectA.left - parseFloat(styleA.marginLeft) + "px";
	divAClone.style.top = rectA.top - parseFloat(styleA.marginTop) + "px";
	divAClone.style.width = rectA.width + "px";
	divAClone.style.height = rectA.height + "px";

	for (let value of styles) {
		divAClone.style[value] = styleA[value];
	}

	setTimeout(() => {
		divAClone.style.transitionProperty = "all";
		divAClone.style.transitionDuration = duration + "ms";
		divAClone.style.transitionDelay = "0ms";
		divAClone.style.transitionTimingFunction = "ease";
		divAClone.style.left = rectB.left - parseFloat(styleB.marginLeft) + "px";
		divAClone.style.top = rectB.top - parseFloat(styleB.marginTop) + "px";
		divAClone.style.width = styleB.width;
		divAClone.style.height = styleB.height;

		for (let value of styles) {
			divAClone.style[value] = styleB[value];
		}
	}, 100);

	divAClone.addEventListener("transitionend", () => {
		// divAClone.style.opacity = "0";
		divA.style.opacity = "1";
		divB.style.opacity = "1";

		if (document.body.contains(divAClone) == true) {
			document.body.removeChild(divAClone);
		}

		onEnd?.();
	});
};
