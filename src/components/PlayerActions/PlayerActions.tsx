import { ReactElement, useState } from 'react';
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
	const { totalSeconds } = useGetSecondsFrame({ fps, framesLength });
	const { minutes, seconds } = useCalculateTime({
		valueTimer
	});

	const [activePlay, setActivePlay] = useState(false);

	function onClickPlayPause(isPlaying: boolean): void {
		setActivePlay(isPlaying);
	}

	function onChangeSlider(value: number): void {
		setValueTimer(value);
		onChangeTimer(value);
	}

	return (
		<div className='flex h-8 w-full items-center justify-start gap-x-1 bg-zinc-500 px-1'>
			<PlayPause onClickPlayPause={onClickPlayPause} />
			<Slider
				max={totalSeconds}
				onChangeValue={onChangeSlider}
				isPlaying={activePlay}
			/>
			<Timer minutes={minutes} seconds={seconds} />
		</div>
	);
}

export default PlayerActions;
