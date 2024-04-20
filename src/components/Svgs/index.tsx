import React from 'react';
import type { ReactElement, SVGProps } from 'react';
import * as library from './library';

interface SvgProperties extends SVGProps<SVGSVGElement> {
	svgName: keyof typeof library;
}

export function Svg({ svgName, ...properties }: SvgProperties): ReactElement {
	return React.createElement(library[svgName], {
		...properties,
		id: svgName
	});
}
