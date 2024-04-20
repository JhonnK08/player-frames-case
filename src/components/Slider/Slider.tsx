import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

interface SliderProperties {
	isPlaying: boolean;
	max: number;
	onChangeValue: (value: number) => void;
}

function Slider({
	isPlaying,
	max,
	onChangeValue
}: SliderProperties): ReactElement {
	const [value, setValue] = useState(0);
	const intervalReference = useRef<number | null>(null);

	function onChangeProgress(event: ChangeEvent<HTMLInputElement>): void {
		setValue(event.target.valueAsNumber);
		onChangeValue(event.target.valueAsNumber);
	}

	useEffect(() => {
		console.log('isPlaying', isPlaying);

		if (isPlaying) {
			intervalReference.current = setInterval((): void => {
				setValue(previous => {
					if (previous + 1 !== max) {
						onChangeProgress({
							target: { valueAsNumber: previous + 1 }
						} as ChangeEvent<HTMLInputElement>);
						return previous + 1;
					}
					return previous;
				});
			}, 1000);
		}

		return () => {
			if (isPlaying && intervalReference.current) {
				clearInterval(intervalReference.current);
			}
		};
	}, [isPlaying]);

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
