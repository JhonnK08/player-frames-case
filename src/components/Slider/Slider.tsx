import { ChangeEvent, ReactElement } from 'react';

interface SliderProperties {
	max: number;
	onChangeValue: (value: number) => void;
	value: number;
}

function Slider({ max, onChangeValue, value }: SliderProperties): ReactElement {
	function onChangeProgress(event: ChangeEvent<HTMLInputElement>): void {
		const eventValue = event.target.valueAsNumber;
		if (eventValue <= max) {
			onChangeValue(event.target.valueAsNumber);
		}
	}

	return (
		<div className='flex flex-1 items-center'>
			<input
				type='range'
				id='progress'
				name='progress'
				onChange={onChangeProgress}
				min={0}
				max={max}
				value={value}
				className='w-full accent-black'
			/>
		</div>
	);
}

export default Slider;
