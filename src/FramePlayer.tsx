import { ReactElement, useState } from 'react';
import PlayerActions from './components/PlayerActions/PlayerActions';
import Screen from './components/Screen/Screen';
import useGetSecondsFrame from './hooks/useGetSecondsFrame';

interface FramePlayerProperties {
	frames: string[];
	fps: number;
}

function FramePlayer({ frames, fps }: FramePlayerProperties): ReactElement {
	const [currentFrame, setCurrentFrame] = useState(0);
	const { secondsPerFrame } = useGetSecondsFrame({
		fps,
		framesLength: frames.length
	});

	function onChangeTimer(timerValue: number): void {
		const newFrame = Math.floor(timerValue / secondsPerFrame);

		if (currentFrame !== newFrame) {
			setCurrentFrame(newFrame);
		}
	}

	return (
		<div className='flex h-80 w-80 flex-col items-start justify-start overflow-hidden rounded-lg shadow-xl'>
			<Screen currentFrame={currentFrame} frames={frames} />
			<PlayerActions
				fps={fps}
				framesLength={frames.length}
				onChangeTimer={onChangeTimer}
			/>
		</div>
	);
}

export default FramePlayer;
