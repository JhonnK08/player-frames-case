import { ReactElement } from 'react';

interface TimerProperties {
	minutes: number;
	seconds: number;
}

function Timer({ minutes, seconds }: TimerProperties): ReactElement {
	function parseNumberToStringTime(num: number): string {
		return String(num).padStart(2, '0');
	}

	console.log('minutes', minutes);
	console.log('seconds', seconds);

	return (
		<div className='flex text-base font-medium tabular-nums text-gray-800'>
			<span>
				{parseNumberToStringTime(minutes)}:
				{parseNumberToStringTime(seconds)}
			</span>
		</div>
	);
}

export default Timer;
