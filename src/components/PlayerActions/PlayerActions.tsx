import { ReactElement, useEffect, useRef, useState } from 'react';
import useCalculateTime from '../../hooks/useCalculateTime';
import useGetSecondsFrame from '../../hooks/useGetSecondsFrame';
import PlayPause from '../PlayPause/PlayPause';
import Slider from '../Slider/Slider';
import Timer from '../Timer/Timer';

interface PlayerActionsProperties {
	framesLength: number;
	fps: number;
	onChangeTimer: (value: number) => void;
}

function PlayerActions({
	fps,
	framesLength,
	onChangeTimer
}: PlayerActionsProperties): ReactElement {
	const [valueTimer, setValueTimer] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const intervalReference = useRef<number | null>(null);

	const { totalSeconds } = useGetSecondsFrame({ fps, framesLength });
	const { minutes, seconds } = useCalculateTime({
		valueTimer
	});

	function onClickPlayPause(): void {
		if (valueTimer === totalSeconds) {
			setValueTimer(0);
			onChangeTimer(0);
		}
		setIsPlaying(previous => !previous);
	}

	function onChangeSlider(value: number): void {
		if (value === totalSeconds) {
			setIsPlaying(false);
			return;
		}
		setValueTimer(value);
		onChangeTimer(value);
	}

	useEffect(() => {
		if (isPlaying) {
			intervalReference.current = setInterval((): void => {
				setValueTimer(previous => {
					if (previous < totalSeconds) {
						onChangeSlider(previous + 1);
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
		<div className='flex h-8 w-full items-center justify-start gap-x-1 bg-zinc-500 px-1'>
			<PlayPause
				onClickPlayPause={onClickPlayPause}
				isPlaying={isPlaying}
			/>
			<Slider
				max={totalSeconds}
				onChangeValue={onChangeSlider}
				value={valueTimer}
			/>
			<Timer minutes={minutes} seconds={seconds} />
		</div>
	);
}

export default PlayerActions;
