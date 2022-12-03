export const animateDiv = (divAClassName: string, divBClassName: string) => {
	const divA = document.querySelector("." + divAClassName);
	const divB = document.querySelector("." + divBClassName);

	if (!divA || !divB) {
		return;
	}

	let divAElements: { [key: string]: any } = getAllElementChildes(divA);
	let divBElements: { [key: string]: any } = getAllElementChildes(divB);

	let divAElementsByClass: { [key: string]: any } = getElementsByCless(divAElements);
	let divBElementsByClass: { [key: string]: any } = getElementsByCless(divBElements);

	for (const key in divAElementsByClass) {
		if (key in divBElementsByClass) {
			for (let i = 0; i < divAElementsByClass[key].length; i++) {
				performAnimateDiv(divAElementsByClass[key][i], divBElementsByClass[key][0], 300, false);
			}
		}
	}
};

export const performAnimateDiv = (
	divA: HTMLDivElement,
	divB: HTMLDivElement,
	duration: number,
	isDeepClone: boolean,
	onStart?: { (): void },
	onEnd?: { (): void }
) => {
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

const getAllElementChildes = (element: any) => {
	const getAllElementChildesHelper = (element: any, arr: any[]) => {
		element.childNodes.forEach((child: any) => {
			arr.push(child);
			getAllElementChildesHelper(child, arr);
		});
	};

	let arr: any = [];

	getAllElementChildesHelper(element, arr);

	return arr;
};

const getElementsByCless = (elements: any) => {
	let elementsByClass: { [key: string]: any } = {};

	for (let i = 0; i < elements.length; i++) {
		const child = elements[i];

		if (!child.classList) {
			continue;
		}

		for (let j = 0; j < child.classList.length; j++) {
			let clazz = child.classList[j];

			if (clazz.includes("-")) {
				continue;
			}

			elementsByClass[clazz] = elementsByClass[clazz] || [];
			elementsByClass[clazz].push(child);
		}
	}

	return elementsByClass;
};
